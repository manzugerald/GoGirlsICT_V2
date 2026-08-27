"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import CodeBlock from "@tiptap/extension-code-block";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import HardBreak from "@tiptap/extension-hard-break";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

import { useRichTextEditorContext } from "./rich-text-context";

type Props = {
  content: object; // Tiptap JSON doc
  onChange: (json: object) => void; // Tiptap JSON doc
  placeholder?: string;
};

/**
 * One editable Tiptap field with no toolbar of its own — it reports focus
 * to the surrounding <RichTextEditorProvider/> so the single shared
 * <RichTextToolbar/> above it knows which field to act on. Use this (instead
 * of <EditorClient/>) for forms with more than one rich-text field.
 */
export default function RichTextField({
  content,
  onChange,
  placeholder = "Start typing...",
}: Props) {
  const { registerFocus, setSelectedImage } = useRichTextEditorContext();

  const editor = useEditor({
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
    onFocus: ({ editor }) => {
      registerFocus(editor);
    },
    immediatelyRender: false,
    extensions: [
      // StarterKit already ships heading/codeBlock/horizontalRule/hardBreak —
      // disable those copies so the customized versions below (with extra
      // attributes / configuration) are the only ones registered.
      StarterKit.configure({
        heading: false,
        codeBlock: false,
        horizontalRule: false,
        hardBreak: false,
      }),
      TextStyle,
      Color,
      FontFamily,
      Underline,
      Highlight.configure({ multicolor: true }),
      Subscript,
      Superscript,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
          class:
            "underline text-blue-600 hover:text-blue-800 visited:text-purple-600",
        },
      }),
      Image.extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            width: { default: "auto" },
            float: { default: null },
          };
        },
        addNodeView() {
          return ({ node, getPos, editor }) => {
            const img = document.createElement("img");
            img.src = node.attrs.src;
            img.style.width = node.attrs.width ?? "auto";
            img.style.float = node.attrs.float ?? "";
            img.className = "tiptap-img";
            img.contentEditable = "false";

            const wrapper = document.createElement("span");
            wrapper.style.position = "relative";
            wrapper.style.display = "inline-block";
            wrapper.appendChild(img);

            const btn = document.createElement("button");
            btn.innerHTML = "×";
            btn.className = "tiptap-img-delete";
            btn.onclick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (typeof getPos === "function") {
                editor
                  .chain()
                  .focus()
                  .deleteRange({ from: getPos(), to: getPos() + 1 })
                  .run();
              }
            };
            wrapper.appendChild(btn);

            let startX = 0;
            let startWidth = 0;
            const resizeHandle = document.createElement("div");
            resizeHandle.className = "tiptap-img-resize";
            resizeHandle.onmousedown = (e) => {
              e.preventDefault();
              startX = e.clientX;
              startWidth = img.width;
              document.onmousemove = (moveEvent) => {
                const newWidth = Math.max(
                  32,
                  startWidth + (moveEvent.clientX - startX)
                );
                img.width = newWidth;
                if (typeof getPos === "function") {
                  editor.commands.command(({ tr }) => {
                    tr.setNodeMarkup(getPos(), undefined, {
                      ...node.attrs,
                      width: `${newWidth}px`,
                    });
                    return true;
                  });
                }
              };
              document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
              };
            };
            wrapper.appendChild(resizeHandle);

            wrapper.onclick = (e) => {
              setSelectedImage({ from: getPos(), to: getPos() + 1 });
              e.stopPropagation();
            };

            return {
              dom: wrapper,
              contentDOM: null,
              stopEvent: () => true,
            };
          };
        },
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      Table.configure({ resizable: true }),
      TableHeader.extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            backgroundColor: {
              default: null,
              parseHTML: (element) =>
                element.getAttribute("data-background-color"),
              renderHTML: (attributes) =>
                attributes.backgroundColor
                  ? {
                      style: `background-color: ${attributes.backgroundColor}`,
                      "data-background-color": attributes.backgroundColor,
                    }
                  : {},
            },
          };
        },
      }),
      TableCell.extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            backgroundColor: {
              default: null,
              parseHTML: (element) =>
                element.getAttribute("data-background-color"),
              renderHTML: (attributes) =>
                attributes.backgroundColor
                  ? {
                      style: `background-color: ${attributes.backgroundColor}`,
                      "data-background-color": attributes.backgroundColor,
                    }
                  : {},
            },
          };
        },
      }),
      TableRow,
      CodeBlock,
      HorizontalRule,
      HardBreak,
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert min-h-[160px] p-2 focus:outline-none tiptap",
      },
      handleClickOn(view, pos, node, nodePos) {
        if (node.type.name === "image") {
          setSelectedImage({ from: nodePos, to: nodePos + node.nodeSize });
        } else {
          setSelectedImage(null);
        }
        return false;
      },
    },
  });

  if (!editor) return null;

  return <EditorContent editor={editor} />;
}
