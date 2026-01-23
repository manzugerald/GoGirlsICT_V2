'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

type DropdownItem = {
  key: string;
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

/**
 * SidebarDropdown
 *
 * - expanded sidebar: inline accordion (opens on hover/click)
 * - collapsed sidebar: icon-only button that opens a floating panel positioned right of the sidebar
 *
 * Important UI:
 * - All items use the same vertical padding so hover/active don't change height.
 * - There is consistent spacing between items (space-y) to avoid visual overlap when hovered.
 * - Active item uses background + left border + subtle hover to keep consistent visuals.
 */
export default function SidebarDropdown({
  id = 'sidebar-dropdown',
  label,
  icon,
  items,
  activeKey,
  onNavigate,
  sidebarCollapsed = false,
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
    if (!btn) {
      setPos(null);
      return;
    }
    const rect = btn.getBoundingClientRect();
    const dropdownHeight = panelRef.current?.offsetHeight ?? Math.min(44 * items.length + 16, 320);
    const viewportHeight = window.innerHeight;

    const btnCenterY = rect.top + rect.height / 2;
    let top = btnCenterY - dropdownHeight / 2;
    const minTop = 8;
    const maxTop = Math.max(8, viewportHeight - dropdownHeight - 8);
    if (top < minTop) top = minTop;
    if (top > maxTop) top = maxTop;

    let left = rect.right + GAP;
    if (left + WIDTH > window.innerWidth - 8) {
      left = Math.max(8, window.innerWidth - WIDTH - 8);
    }

    setPos({ top: Math.round(top), left: Math.round(left) });
  }, [items.length]);

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
  function toggle(e?: React.MouseEvent) {
    e?.preventDefault();
    setOpen((s) => !s);
  }

  // Shared classes
  const itemBase =
    'w-full text-left px-4 py-3 rounded text-sm flex items-start gap-3 transition-colors';
  const itemHover = 'hover:bg-gray-50 dark:hover:bg-gray-700';
  // Active decoration uses left border and background; also includes hover so it doesn't "jump"
  const activeDecoration =
    'bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border-l-4 border-pink-600 dark:border-pink-500';

  // Expanded sidebar -> inline accordion
  if (!sidebarCollapsed) {
    return (
      <div onMouseEnter={() => openMenu()} onMouseLeave={() => scheduleClose()}>
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
            }`}
          style={{ minWidth: 0 }}
          title={label}
        >
          <span className="text-xl">{icon}</span>
          <span className="truncate text-sm">{label}</span>
          <span
            className={`ml-auto mr-2 transition-transform duration-150 ${
              open ? 'rotate-90' : 'rotate-0'
            }`}
            aria-hidden
          >
            <FaAngleDown />
          </span>
        </button>

        {/* Use vertical spacing between items to avoid overlap on hover */}
        {open && (
          <div className="pl-8 pr-2 mt-2 space-y-2">
            {items.map((it) => {
              const active = activeKey === it.key;
              return (
                <button
                  key={it.key}
                  onClick={() => {
                    setOpen(false);
                    onNavigate(it.key);
                  }}
                  className={`${itemBase} ${active ? activeDecoration : itemHover}`}
                >
                  <span className="mt-0.5 text-base text-gray-600 dark:text-gray-200">
                    {it.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{it.label}</div>
                    {it.subtitle && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
                        {it.subtitle}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Collapsed sidebar: icon-only button that shows floating panel
  return (
    <div className="relative" onMouseEnter={() => openMenu()} onMouseLeave={() => scheduleClose()}>
      <button
        ref={triggerRef}
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="w-full flex items-center justify-center gap-2 p-2 rounded transition-colors text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
        title={label}
        style={{ minWidth: 0 }}
      >
        <span className="text-lg">{icon}</span>
        <span className="text-xs text-gray-400" aria-hidden>
          <FaAngleRight />
        </span>
      </button>

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
              {/* spacing between items via space-y */}
              <div className="p-3 space-y-2">
                {items.map((it) => {
                  const isActive = activeKey === it.key;
                  return (
                    <button
                      key={it.key}
                      onClick={() => {
                        setOpen(false);
                        onNavigate(it.key);
                      }}
                      role="menuitem"
                      className={`${itemBase} ${isActive ? activeDecoration : itemHover}`}
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
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
