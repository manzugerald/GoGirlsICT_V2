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
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import "@/assets/styles/tiptap-editor.css";

type Props = {
  content: object; // Tiptap JSON doc
  className?: string;
};

// Applied when a caller doesn't specify its own className, so a viewer
// always looks like properly typeset rich text out of the box instead
// of unstyled raw HTML.
const DEFAULT_VIEWER_CLASS = "prose dark:prose-invert max-w-none";

/**
 * Read-only renderer for Tiptap JSON docs.
 *
 * Loads the SAME extension set as components/editor/editor-client.tsx
 * (minus editing-only affordances like Placeholder) so any document
 * created there — headings, colors, highlights, fonts, alignment,
 * tables, sub/superscript — renders faithfully everywhere it's viewed
 * (admin panels and the public site alike).
 */
export default function TiptapJsonViewer({ content, className }: Props) {
  const editor = useEditor({
    content,
    editable: false,
    immediatelyRender: false,
    extensions: [
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
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          rel: 'noopener noreferrer',
          target: '_blank',
          class: 'underline text-blue-600 hover:text-blue-800 visited:text-purple-600',
        },
      }),
      Image.extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            width: { default: 'auto' },
            float: { default: null },
          };
        },
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      Table.configure({ resizable: true }),
      TableHeader,
      TableCell,
      TableRow,
      CodeBlock,
      HorizontalRule,
      HardBreak,
    ],
    editorProps: {
      attributes: {
        class: 'tiptap tiptap-viewer',
      },
    },
  });

  if (!editor) return null;

  return (
    <div className={`tiptap-viewer-wrapper ${className ?? DEFAULT_VIEWER_CLASS}`}>
      <EditorContent editor={editor} />
    </div>
  );
}
