"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Editor } from "@tiptap/react";

type ImageSelection = { from: number; to: number } | null;

type RichTextContextValue = {
  activeEditor: Editor | null;
  registerFocus: (editor: Editor) => void;
  selectedImage: ImageSelection;
  setSelectedImage: (selection: ImageSelection) => void;
};

const RichTextContext = createContext<RichTextContextValue | null>(null);

/**
 * Wraps a form (or a section of one) that has one or more Tiptap-editable
 * fields, so a single <RichTextToolbar/> placed once above them can act on
 * whichever field last had focus.
 *
 * `activeEditor` is intentionally never cleared back to null once a field
 * has been focused (`registerFocus` only ever sets a real editor). Clicking
 * a toolbar button blurs the currently-focused field first, but every
 * command already chains `.focus()` before running (e.g.
 * `editor.chain().focus().toggleBold().run()`), which restores focus to
 * that same field — so the toolbar never "forgets" its target just because
 * the field it belongs to isn't focused at the exact moment of the click.
 */
export function RichTextEditorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeEditor, setActiveEditor] = useState<Editor | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageSelection>(null);

  const registerFocus = useCallback((editor: Editor) => {
    setActiveEditor(editor);
  }, []);

  const value = useMemo(
    () => ({ activeEditor, registerFocus, selectedImage, setSelectedImage }),
    [activeEditor, registerFocus, selectedImage]
  );

  return (
    <RichTextContext.Provider value={value}>
      {children}
    </RichTextContext.Provider>
  );
}

export function useRichTextEditorContext() {
  const ctx = useContext(RichTextContext);
  if (!ctx) {
    throw new Error(
      "RichTextToolbar / RichTextField must be rendered inside a RichTextEditorProvider"
    );
  }
  return ctx;
}
