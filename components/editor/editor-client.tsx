"use client";

import "@/assets/styles/tiptap-editor.css";

import { RichTextEditorProvider } from "./rich-text-context";
import RichTextToolbar from "./rich-text-toolbar";
import RichTextField from "./rich-text-field";

type Props = {
  content: object; // Tiptap JSON doc
  onChange: (json: object) => void; // Tiptap JSON doc
  showLinkUnlink?: boolean;
  placeholder?: string;
};

/**
 * Self-contained single-field rich-text editor: one toolbar bound to one
 * field, wrapped together. This is the same
 * RichTextEditorProvider + RichTextToolbar + RichTextField combination a
 * multi-field form assembles by hand (see createFAQForm.tsx /
 * createEventForm.tsx) — for a form with only one rich-text field, this is
 * the shorter way to get it.
 */
export default function EditorClient({
  content,
  onChange,
  showLinkUnlink = true,
  placeholder = "Start typing...",
}: Props) {
  return (
    <RichTextEditorProvider>
      <div className="tiptap-wrapper">
        <RichTextToolbar showLinkUnlink={showLinkUnlink} />
        <RichTextField
          content={content}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </RichTextEditorProvider>
  );
}
