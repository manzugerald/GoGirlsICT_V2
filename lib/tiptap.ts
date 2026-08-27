/**
 * Shared helpers for working with Tiptap JSON documents.
 *
 * Several admin sections and public pages each reimplemented their own
 * version of "is this a real Tiptap doc?" / "pull the plain text out of
 * this" / "what do I show if the value is missing or malformed?". Those
 * copies disagreed in small ways and some were unsafe to hand straight
 * to `useEditor({ content })` (a malformed doc — e.g. legacy data saved
 * before a field used the rich editor — throws inside ProseMirror rather
 * than degrading gracefully). This module is the single implementation
 * every editor/viewer consumer should use instead.
 */

export const EMPTY_TIPTAP_DOC: Record<string, unknown> = {
  type: 'doc',
  content: [{ type: 'paragraph' }],
};

/**
 * True only for a value that is actually shaped like a Tiptap/ProseMirror
 * document node — the minimum ProseMirror needs to parse it without
 * throwing (`{ type: 'doc', content: [...] }`).
 */
export function isTiptapDoc(value: unknown): value is { type: 'doc'; content: unknown[] } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  const doc = value as { type?: unknown; content?: unknown };
  return doc.type === 'doc' && Array.isArray(doc.content);
}

/**
 * Recursively pulls plain text out of a Tiptap doc node (or anything
 * shaped enough like one) — used for card previews, list titles, and
 * excerpt truncation, never for the "real" rendered content.
 */
export function extractPlainText(node: unknown): string {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number' || typeof node === 'boolean') return String(node);

  if (Array.isArray(node)) {
    return node.map(extractPlainText).join('');
  }

  if (typeof node === 'object') {
    const obj = node as Record<string, unknown>;
    let text = '';
    if (typeof obj.text === 'string') text += obj.text;
    if (Array.isArray(obj.content)) {
      const isBlock = obj.type === 'paragraph' || obj.type === 'heading' || obj.type === 'listItem';
      text += obj.content.map(extractPlainText).join('');
      if (isBlock) text += ' ';
    }
    return text;
  }

  return '';
}

/**
 * Plain-text excerpt for previews/titles: whitespace-collapsed and
 * truncated to `maxChars`.
 */
export function tiptapExcerpt(value: unknown, maxChars = 160): string {
  const text = extractPlainText(value).replace(/\s+/g, ' ').trim();
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars).trim()}...`;
}

/**
 * Best-effort parse: if `value` is a JSON-encoded string (legacy data
 * saved before a field used the rich editor could be this), parse it;
 * otherwise return it as-is.
 */
function tryParseJsonString(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  if (!trimmed) return value;
  if (
    (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'))
  ) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return value;
    }
  }
  return value;
}

/**
 * Guarantees a value safe to pass to `useEditor({ content })` /
 * `TiptapJsonViewer`. A real Tiptap doc passes through unchanged;
 * anything else (a plain string, a JSON-encoded string, a malformed or
 * legacy shape, `null`/`undefined`) is normalized into a minimal valid
 * doc that preserves whatever text can be recovered from it, so a
 * viewer never crashes on data saved before this field used the rich
 * editor.
 */
export function normalizeTiptapDoc(value: unknown): Record<string, unknown> {
  const parsed = tryParseJsonString(value);

  if (isTiptapDoc(parsed)) {
    return parsed as Record<string, unknown>;
  }

  const text = extractPlainText(parsed).trim();

  return {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        ...(text ? { content: [{ type: 'text', text }] } : {}),
      },
    ],
  };
}

/** True when a (normalized-or-not) doc has no visible text/media in it. */
export function isTiptapDocEmpty(value: unknown): boolean {
  return extractPlainText(value).trim().length === 0;
}
