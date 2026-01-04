'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

type DropdownItem = {
  key: string; // Section key used by parent (e.g. 'projects')
  label: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

type Props = {
  id?: string;
  label: string;
  icon?: React.ReactNode;
  items: DropdownItem[];
  activeKey?: string | null;
  onNavigate: (key: string) => void;
  sidebarCollapsed?: boolean;
};

export default function SidebarDropdown({
  id = 'sidebar-dropdown',
  label,
  icon,
  items,
  activeKey,
  onNavigate,
  sidebarCollapsed,
}: Props) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const WIDTH = 260;
  const GAP = 8;

  const isAnyItemActive = items.some((it) => it.key === activeKey);

  const computePos = useCallback(() => {
    const btn = triggerRef.current;
    if (!btn) return setPos(null);
    const rect = btn.getBoundingClientRect();
    const dropdownHeight = panelRef.current?.offsetHeight ?? 140;
    const viewportHeight = window.innerHeight;

    // center vertically on the button/caret
    const btnCenterY = rect.top + rect.height / 2;
    let top = btnCenterY - dropdownHeight / 2;
    const minTop = 8;
    const maxTop = Math.max(8, viewportHeight - dropdownHeight - 8);
    if (top < minTop) top = minTop;
    if (top > maxTop) top = maxTop;

    // horizontal: position just to the right of the button (so it floats over content)
    let left = rect.right + GAP;
    if (left + WIDTH > window.innerWidth - 8) {
      left = Math.max(8, window.innerWidth - WIDTH - 8);
    }

    setPos({ top: Math.round(top), left: Math.round(left) });
  }, []);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(computePos);
    window.addEventListener('resize', computePos);
    window.addEventListener('scroll', computePos, true);
    return () => {
      window.removeEventListener('resize', computePos);
      window.removeEventListener('scroll', computePos, true);
    };
  }, [open, computePos]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node | null;
      if (!triggerRef.current?.contains(t as Node) && !panelRef.current?.contains(t as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function openMenu() {
    if (sidebarCollapsed) return;
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  }
  function scheduleClose(delay = 150) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, delay);
  }
  function toggle() {
    if (sidebarCollapsed) return;
    setOpen((s) => !s);
  }

  return (
    <>
      <div onMouseEnter={openMenu} onMouseLeave={() => scheduleClose()}>
        <button
          ref={triggerRef}
          onClick={toggle}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className={`w-full flex items-center gap-3 pl-4 pr-2 py-2 rounded transition-all font-medium
            ${
              isAnyItemActive
                ? 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400'
                : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-pink-700 dark:hover:text-pink-400'
            }
          `}
          style={{ minWidth: 0 }}
          title={label}
        >
          <span className="text-xl">{icon}</span>
          {!sidebarCollapsed && (
            <>
              <span className="truncate text-sm">{label}</span>
              <span
                className={`ml-auto mr-2 transition-transform duration-150 ${
                  open ? 'rotate-90' : 'rotate-0'
                }`}
                aria-hidden
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M8 5l8 7-8 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </>
          )}
        </button>
      </div>

      {open &&
        pos &&
        createPortal(
          <div
            id={`${id}-panel`}
            ref={panelRef}
            role="menu"
            aria-label={label}
            className="fixed z-[9999] pointer-events-auto"
            style={{ top: pos.top, left: pos.left, width: WIDTH }}
            onMouseEnter={() => {
              if (closeTimer.current) {
                window.clearTimeout(closeTimer.current);
                closeTimer.current = null;
              }
            }}
            onMouseLeave={() => scheduleClose()}
          >
            <div className="rounded-md shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-10 bg-white dark:bg-gray-800">
              <div className="p-2">
                {items.map((it) => (
                  <button
                    key={it.key}
                    onClick={() => {
                      setOpen(false);
                      onNavigate(it.key);
                    }}
                    role="menuitem"
                    className={`w-full text-left p-3 rounded-md flex items-start gap-3 transition
                    ${
                      activeKey === it.key
                        ? 'bg-pink-50 dark:bg-pink-900/40 ring-1 ring-pink-100'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                  >
                    <span className="mt-0.5 text-base text-gray-600 dark:text-gray-200">
                      {it.icon}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                        {it.label}
                      </div>
                      {it.subtitle && (
                        <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                          {it.subtitle}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
