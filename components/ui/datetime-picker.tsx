'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

type Props = {
  id?: string;
  value: string; // 'YYYY-MM-DDTHH:mm' or ''
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
};

function splitValue(value: string): { date: string; time: string } {
  if (!value) return { date: '', time: '' };
  const [date, time] = value.split('T');
  return { date: date ?? '', time: time ?? '' };
}

function formatDisplay(value: string): string {
  if (!value) return '';
  const d = new Date(value);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

/**
 * A date + time field with an explicit confirm step, instead of a bare
 * native <input type="datetime-local">. Native datetime-local inputs
 * don't have a scriptable "confirm" moment — a form could be submitted
 * while the browser's own picker still had a half-made selection (date
 * chosen, time not yet committed, or vice versa), which is the most
 * likely source of a "please provide a valid date" error even though the
 * user was sure they'd picked one. Here, `onChange` only ever fires from
 * an explicit action — "Set date & time" (time defaults to midnight if
 * left blank) or "Clear" — never from an in-between state. "Close"
 * dismisses the popover without touching the field's current value.
 */
export default function DateTimePicker({ id, value, onChange, required, placeholder }: Props) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(() => splitValue(value));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraft(splitValue(value));
  }, [value]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setDraft(splitValue(value)); // discard anything not explicitly applied
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, value]);

  const handleApply = () => {
    if (!draft.date) return;
    // Time defaults to midnight when only a date was picked — the button
    // shouldn't stay disabled just because the admin didn't also touch
    // the time field.
    onChange(`${draft.date}T${draft.time || '00:00'}`);
    setOpen(false);
  };

  const handleClear = () => {
    setDraft({ date: '', time: '' });
    onChange('');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setDraft(splitValue(value)); // discard anything not explicitly applied
  };

  const canApply = Boolean(draft.date);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground text-left"
      >
        {formatDisplay(value) || (
          <span className="text-muted-foreground">{placeholder ?? 'Not set'}</span>
        )}
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full min-w-[280px] rounded-md border border-input bg-background p-3 shadow-lg space-y-3">
          <div className="space-y-1">
            <Label className="text-xs">Date</Label>
            <Input
              type="date"
              value={draft.date}
              onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Time</Label>
            <Input
              type="time"
              value={draft.time}
              onChange={(e) => setDraft((d) => ({ ...d, time: e.target.value }))}
            />
          </div>
          <div className="flex gap-2 justify-end pt-1">
            {!required && (
              <Button type="button" variant="outline" size="sm" onClick={handleClear}>
                Clear
              </Button>
            )}
            <Button type="button" variant="outline" size="sm" onClick={handleClose}>
              Close
            </Button>
            <Button type="button" size="sm" onClick={handleApply} disabled={!canApply}>
              Set Date &amp; Time
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
