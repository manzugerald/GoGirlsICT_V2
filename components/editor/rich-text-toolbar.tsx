"use client";

import { useState } from "react";
import { useRichTextEditorContext } from "./rich-text-context";

const textColors = [
  "#000000", "#ffffff", "#9f004d", "#f87171", "#fbbf24", "#34d399",
  "#60a5fa", "#a78bfa", "#f472b6", "#d1d5db",
];

const highlightColors = [
  "#fef08a", "#bbf7d0", "#bfdbfe", "#fbcfe8", "#fed7aa", "#e9d5ff",
];

const fontFamilyOptions: { label: string; value: string | null }[] = [
  { label: "Default font", value: null },
  { label: "Sans Serif", value: "ui-sans-serif, system-ui, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
  { label: "Monospace", value: "'Courier New', monospace" },
  { label: "Arial", value: "Arial, Helvetica, sans-serif" },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
];

type Props = {
  showLinkUnlink?: boolean;
};

/**
 * A single toolbar for a whole form: it operates on whichever
 * <RichTextField/> most recently had focus (via RichTextEditorProvider),
 * so every rich-text field in the form shares one toolbar sitting above
 * them instead of each rendering its own.
 *
 * Before any field has been focused (or if the form has none), `editor` is
 * null and every control renders disabled rather than being hidden, so the
 * toolbar's layout doesn't jump around once a field is focused.
 */
export default function RichTextToolbar({ showLinkUnlink = true }: Props) {
  const {
    activeEditor: editor,
    selectedImage,
    setSelectedImage,
  } = useRichTextEditorContext();

  const [showTablePrompt, setShowTablePrompt] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [includeHeader, setIncludeHeader] = useState(true);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkValue, setLinkValue] = useState("");

  const disabled = !editor;

  const setCellColor = (color: string) =>
    editor?.chain().focus().setCellAttribute("backgroundColor", color).run();
  const setTextColor = (color: string) =>
    editor?.chain().focus().setColor(color).run();
  const setHighlightColor = (color: string) =>
    editor?.chain().focus().toggleHighlight({ color }).run();
  const setFontFamily = (value: string) => {
    if (!editor) return;
    if (!value) editor.chain().focus().unsetFontFamily().run();
    else editor.chain().focus().setFontFamily(value).run();
  };

  // `setNodeAttribute` isn't a real Tiptap/ProseMirror command (it never
  // was, in either v2 or v3) — updating an already-inserted node's
  // attributes has to go through a manual transaction.
  const updateSelectedImageAttrs = (attrs: Record<string, unknown>) => {
    if (!selectedImage || !editor) return;
    editor.commands.command(({ tr, state }) => {
      const node = state.doc.nodeAt(selectedImage.from);
      if (!node) return false;
      tr.setNodeMarkup(selectedImage.from, undefined, {
        ...node.attrs,
        ...attrs,
      });
      return true;
    });
  };
  const setImageFloat = (float: "left" | "right" | "none") =>
    updateSelectedImageAttrs({ float: float === "none" ? null : float });
  const setImageWidth = (width: string) => updateSelectedImageAttrs({ width });
  const removeImage = () => {
    if (selectedImage && editor) {
      editor.chain().focus().deleteRange(selectedImage).run();
      setSelectedImage(null);
    }
  };
  const insertImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      editor?.chain().focus().setImage({ src: base64 }).run();
    };
    reader.readAsDataURL(file);
  };

  const openLinkInput = () => {
    if (!editor) return;
    setLinkValue(editor.getAttributes("link").href || "");
    setShowLinkInput(true);
    setTimeout(() => {
      const el = document.getElementById("tiptap-link-input");
      if (el) el.focus();
    }, 0);
  };
  const handleLinkInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!editor) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (!linkValue) {
        editor.chain().focus().unsetLink().run();
      } else {
        editor
          .chain()
          .focus()
          .extendMarkRange("link")
          .setLink({ href: linkValue })
          .run();
      }
      setShowLinkInput(false);
    }
    if (e.key === "Escape") {
      setShowLinkInput(false);
    }
  };

  const headingValue = editor?.isActive("heading", { level: 1 })
    ? "h1"
    : editor?.isActive("heading", { level: 2 })
    ? "h2"
    : editor?.isActive("heading", { level: 3 })
    ? "h3"
    : "p";

  return (
    <div className="tiptap-toolbar-panel">
      {/* Block type + font */}
      <div className="tiptap-toolbar tiptap-toolbar-row">
        <select
          value={headingValue}
          onChange={(e) => {
            if (!editor) return;
            const value = e.target.value;
            if (value === "p") {
              editor.chain().focus().setParagraph().run();
            } else {
              editor
                .chain()
                .focus()
                .toggleHeading({
                  level: Number(value.replace("h", "")) as 1 | 2 | 3,
                })
                .run();
            }
          }}
          className="tiptap-select"
          title="Paragraph style"
          disabled={disabled}
        >
          <option value="p">Normal text</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>

        <select
          defaultValue=""
          onChange={(e) => setFontFamily(e.target.value)}
          className="tiptap-select"
          title="Font family"
          disabled={disabled}
        >
          {fontFamilyOptions.map((opt) => (
            <option key={opt.label} value={opt.value ?? ""}>
              {opt.label}
            </option>
          ))}
        </select>

        <span className="tiptap-toolbar-sep" aria-hidden="true" />

        <input
          type="color"
          onChange={(e) => setTextColor(e.target.value)}
          value={editor?.getAttributes("textStyle").color || "#000000"}
          className="tiptap-color-input"
          title="Text color"
          disabled={disabled}
        />
        <button
          type="button"
          onClick={() => editor?.chain().focus().unsetColor().run()}
          className="tiptap-btn"
          title="Remove text color"
          disabled={disabled}
        >
          A⃠
        </button>

        <div className="tiptap-swatch-group" title="Highlight color">
          {highlightColors.map((color) => (
            <button
              key={color}
              type="button"
              className="tiptap-swatch-btn"
              style={{ backgroundColor: color }}
              onClick={() => setHighlightColor(color)}
              aria-label={`Highlight ${color}`}
              disabled={disabled}
            />
          ))}
          <button
            type="button"
            onClick={() => editor?.chain().focus().unsetHighlight().run()}
            className={
              editor?.isActive("highlight") ? "tiptap-btn-active" : "tiptap-btn"
            }
            title="Remove highlight"
            disabled={disabled}
          >
            ⌫
          </button>
        </div>
      </div>

      {/* Marks + structure */}
      <div className="tiptap-toolbar tiptap-toolbar-row">
        <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className={editor?.isActive("bold") ? "tiptap-btn-active" : "tiptap-btn"} title="Bold" disabled={disabled}><b>B</b></button>
        <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className={editor?.isActive("italic") ? "tiptap-btn-active" : "tiptap-btn"} title="Italic" disabled={disabled}><i>I</i></button>
        <button type="button" onClick={() => editor?.chain().focus().toggleUnderline().run()} className={editor?.isActive("underline") ? "tiptap-btn-active" : "tiptap-btn"} title="Underline" disabled={disabled}><u>U</u></button>
        <button type="button" onClick={() => editor?.chain().focus().toggleStrike().run()} className={editor?.isActive("strike") ? "tiptap-btn-active" : "tiptap-btn"} title="Strikethrough" disabled={disabled}><s>S</s></button>
        <button type="button" onClick={() => editor?.chain().focus().toggleSubscript().run()} className={editor?.isActive("subscript") ? "tiptap-btn-active" : "tiptap-btn"} title="Subscript" disabled={disabled}>X₂</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleSuperscript().run()} className={editor?.isActive("superscript") ? "tiptap-btn-active" : "tiptap-btn"} title="Superscript" disabled={disabled}>X²</button>

        <span className="tiptap-toolbar-sep" aria-hidden="true" />

        <button type="button" onClick={() => editor?.chain().focus().setTextAlign("left").run()} className={editor?.isActive({ textAlign: "left" }) ? "tiptap-btn-active" : "tiptap-btn"} title="Align left" disabled={disabled}>⇤</button>
        <button type="button" onClick={() => editor?.chain().focus().setTextAlign("center").run()} className={editor?.isActive({ textAlign: "center" }) ? "tiptap-btn-active" : "tiptap-btn"} title="Align center" disabled={disabled}>⇔</button>
        <button type="button" onClick={() => editor?.chain().focus().setTextAlign("right").run()} className={editor?.isActive({ textAlign: "right" }) ? "tiptap-btn-active" : "tiptap-btn"} title="Align right" disabled={disabled}>⇥</button>
        <button type="button" onClick={() => editor?.chain().focus().setTextAlign("justify").run()} className={editor?.isActive({ textAlign: "justify" }) ? "tiptap-btn-active" : "tiptap-btn"} title="Justify" disabled={disabled}>☰</button>

        <span className="tiptap-toolbar-sep" aria-hidden="true" />

        <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} className={editor?.isActive("bulletList") ? "tiptap-btn-active" : "tiptap-btn"} title="Bullet list" disabled={disabled}>• List</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={editor?.isActive("orderedList") ? "tiptap-btn-active" : "tiptap-btn"} title="Numbered list" disabled={disabled}>1. List</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleBlockquote().run()} className={editor?.isActive("blockquote") ? "tiptap-btn-active" : "tiptap-btn"} title="Quote" disabled={disabled}>❝ Quote</button>
        <button type="button" onClick={() => editor?.chain().focus().toggleCodeBlock().run()} className={editor?.isActive("codeBlock") ? "tiptap-btn-active" : "tiptap-btn"} title="Code block" disabled={disabled}>⌨ Code</button>
        <button type="button" onClick={() => editor?.chain().focus().setHorizontalRule().run()} className="tiptap-btn" title="Horizontal rule" disabled={disabled}>― Rule</button>
        <button type="button" onClick={() => editor?.chain().focus().setHardBreak().run()} className="tiptap-btn" title="Line break" disabled={disabled}>↵ New Line</button>
      </div>

      {/* Links, media, tables */}
      <div className="tiptap-toolbar tiptap-toolbar-row">
        {!showLinkInput ? (
          <>
            <button
              type="button"
              onClick={openLinkInput}
              className={editor?.isActive("link") ? "tiptap-btn-active" : "tiptap-btn"}
              title="Add link"
              disabled={disabled}
            >
              🔗 Link
            </button>
            {showLinkUnlink && (
              <button
                type="button"
                onClick={() => editor?.chain().focus().unsetLink().run()}
                className={editor?.isActive("link") ? "tiptap-btn" : "tiptap-btn-disabled"}
                disabled={disabled || !editor?.isActive("link")}
                title="Remove link"
              >
                ⛔ Unlink
              </button>
            )}
          </>
        ) : (
          <input
            id="tiptap-link-input"
            className="tiptap-link-input"
            type="text"
            placeholder="Paste or type a URL and press Enter"
            value={linkValue}
            onChange={(e) => setLinkValue(e.target.value)}
            onKeyDown={handleLinkInputKeyDown}
            onBlur={() => setShowLinkInput(false)}
          />
        )}

        <label className={disabled ? "tiptap-btn-disabled" : "tiptap-btn cursor-pointer"} title="Insert image">
          🖼️ Image
          <input
            type="file"
            accept="image/*"
            hidden
            disabled={disabled}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) insertImage(file);
            }}
          />
        </label>

        <span className="tiptap-toolbar-sep" aria-hidden="true" />

        <button type="button" onClick={() => setShowTablePrompt(true)} className="tiptap-btn" title="Insert table" disabled={disabled}>➕ Table</button>
        <button type="button" onClick={() => editor?.chain().focus().deleteTable().run()} className="tiptap-btn" title="Delete table" disabled={disabled}>❌ Table</button>
        <button type="button" onClick={() => editor?.chain().focus().addColumnBefore().run()} className="tiptap-btn" title="Add column before" disabled={disabled}>|◀️ Col</button>
        <button type="button" onClick={() => editor?.chain().focus().addColumnAfter().run()} className="tiptap-btn" title="Add column after" disabled={disabled}>Col ▶️|</button>
        <button type="button" onClick={() => editor?.chain().focus().deleteColumn().run()} className="tiptap-btn" title="Delete column" disabled={disabled}>⛔ Col</button>
        <button type="button" onClick={() => editor?.chain().focus().addRowBefore().run()} className="tiptap-btn" title="Add row above" disabled={disabled}>▲ Row</button>
        <button type="button" onClick={() => editor?.chain().focus().addRowAfter().run()} className="tiptap-btn" title="Add row below" disabled={disabled}>▼ Row</button>
        <button type="button" onClick={() => editor?.chain().focus().deleteRow().run()} className="tiptap-btn" title="Delete row" disabled={disabled}>⛔ Row</button>

        <span className="tiptap-toolbar-sep" aria-hidden="true" />

        <button type="button" onClick={() => editor?.chain().focus().undo().run()} className="tiptap-btn" title="Undo" disabled={disabled}>↶ Undo</button>
        <button type="button" onClick={() => editor?.chain().focus().redo().run()} className="tiptap-btn" title="Redo" disabled={disabled}>↷ Redo</button>
      </div>

      {editor?.isActive("table") && (
        <div className="tiptap-table-colors mb-2 flex flex-wrap gap-1 items-center px-2">
          <span className="text-xs mr-2">Cell Color:</span>
          {textColors.map((color) => (
            <button
              key={color}
              className="tiptap-table-color-btn"
              style={{ backgroundColor: color }}
              onClick={() => setCellColor(color)}
              aria-label={`Set cell color ${color}`}
              type="button"
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="tiptap-img-menu flex flex-wrap gap-2 mb-2 items-center">
          <span className="text-xs">Image:</span>
          <button type="button" className="tiptap-btn" onClick={() => setImageFloat("left")}>⬅️ Float Left</button>
          <button type="button" className="tiptap-btn" onClick={() => setImageFloat("right")}>Float Right ➡️</button>
          <button type="button" className="tiptap-btn" onClick={() => setImageFloat("none")}>No Float</button>
          <button type="button" className="tiptap-btn" onClick={() => setImageWidth("100%")}>100% Width</button>
          <button type="button" className="tiptap-btn" onClick={() => setImageWidth("50%")}>50% Width</button>
          <button type="button" className="tiptap-btn" onClick={removeImage}>❌ Delete Image</button>
        </div>
      )}

      {showTablePrompt && (
        <div className="m-2 border p-4 rounded-md bg-muted text-muted-foreground space-y-2">
          <div className="flex gap-4 items-center">
            <label>Rows:</label>
            <input type="number" value={tableRows} min={1} max={10} onChange={(e) => setTableRows(+e.target.value)} className="border p-1 w-16" />
            <label>Cols:</label>
            <input type="number" value={tableCols} min={1} max={10} onChange={(e) => setTableCols(+e.target.value)} className="border p-1 w-16" />
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={includeHeader} onChange={() => setIncludeHeader(!includeHeader)} />
              Header
            </label>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="tiptap-btn"
              onClick={() => {
                editor
                  ?.chain()
                  .focus()
                  .insertTable({ rows: tableRows, cols: tableCols, withHeaderRow: includeHeader })
                  .run();
                setShowTablePrompt(false);
              }}
            >
              ✅ Insert
            </button>
            <button type="button" onClick={() => setShowTablePrompt(false)} className="tiptap-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
