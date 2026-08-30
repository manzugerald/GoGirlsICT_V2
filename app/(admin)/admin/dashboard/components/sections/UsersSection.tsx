'use client';

import React, { useState, useEffect } from 'react';
import { User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

// This section renders User records defensively (extra profile fields are
// listed generically via Object.entries below) rather than one fixed shape
// — hence one deliberate loose alias here instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UserRecord = any;

export default function UsersSection({
  paginatedData,
  handleEdit,
  handlePasswordEdit,
  handleDelete,
}: {
  paginatedData: UserRecord[];
  handleEdit: (record: UserRecord) => void;
  handlePasswordEdit: (record: UserRecord) => void;
  handleDelete: (id: string | number) => void;
}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [editingChoiceId, setEditingChoiceId] = useState<number | null>(null);
  const [editingChoiceValue, setEditingChoiceValue] = useState<'details' | 'password'>('details');

  const { data: session, status } = useSession();

  useEffect(() => {
    console.log('UsersSection session:', session, 'status:', status);
  }, [session, status]);

  function toggleExpand(id: number) {
    setExpandedId((prev) => (prev === id ? null : id));
    if (expandedId === id) {
      setEditingChoiceId(null);
      setEditingChoiceValue('details');
    }
  }

  function handleCardClick(e: React.MouseEvent, id: number) {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const interactive = target.closest('button, a, input, textarea, select, [data-no-toggle]');
    if (interactive) return;
    toggleExpand(id);
  }

  function handleCardKeyDown(e: React.KeyboardEvent, id: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand(id);
    }
  }

  return (
    <div className="space-y-4">
      {(!Array.isArray(paginatedData) || paginatedData.length === 0) && (
        <div className="text-center py-8 text-gray-500">No users found.</div>
      )}

      {Array.isArray(paginatedData) &&
        paginatedData.map((user) => {
          const isExpanded = expandedId === user.id;
          const displayName =
            (user.firstName || user.lastName) &&
            `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()
              ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()
              : user.username;

          // Make the card allow visible overflow when its dropdown is open so the menu isn't clipped.
          const cardOverflowClass =
            editingChoiceId === user.id ? 'overflow-visible' : 'overflow-hidden';

          return (
            <div
              key={user.id}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              onClick={(e) => handleCardClick(e, user.id)}
              onKeyDown={(e) => handleCardKeyDown(e, user.id)}
              className={`p-4 border rounded-md bg-white dark:bg-gray-900 hover:shadow-sm transition-all ${cardOverflowClass} cursor-pointer focus:outline-pink-500`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0 flex items-center gap-3">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.username || 'avatar'}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border">
                      <UserIcon className="w-7 h-7 text-muted-foreground" />
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <div className="font-medium text-lg truncate" title={displayName}>
                      {displayName}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">@{user.username}</div>
                    <div className="text-sm text-muted-foreground truncate">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      toggleExpand(user.id);
                    }}
                    data-no-toggle
                  >
                    {isExpanded ? 'Hide' : 'View'}
                  </Button>

                  {/* EDIT button now shows an inline choice panel */}
                  <div className="relative">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        // toggle edit choice panel for this user
                        setEditingChoiceId((prev) => (prev === user.id ? null : user.id));
                        setEditingChoiceValue('details');
                      }}
                      data-no-toggle
                    >
                      Edit
                    </Button>

                    {editingChoiceId === user.id && (
                      <div
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 border rounded shadow p-3 z-[9999]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="text-sm font-medium mb-2">Edit</div>

                        <label className="flex items-center gap-2 mb-1">
                          <input
                            type="radio"
                            name={`edit-choice-${user.id}`}
                            value="details"
                            checked={editingChoiceValue === 'details'}
                            onChange={() => setEditingChoiceValue('details')}
                          />
                          <span className="text-sm">Other details</span>
                        </label>

                        <label className="flex items-center gap-2 mb-3">
                          <input
                            type="radio"
                            name={`edit-choice-${user.id}`}
                            value="password"
                            checked={editingChoiceValue === 'password'}
                            onChange={() => setEditingChoiceValue('password')}
                          />
                          <span className="text-sm">Password only</span>
                        </label>

                        <div className="flex gap-2 justify-end">
                          <button
                            type="button"
                            className="px-3 py-1 rounded bg-gray-100 dark:bg-slate-700 text-sm"
                            onClick={() => {
                              setEditingChoiceId(null);
                              setEditingChoiceValue('details');
                            }}
                          >
                            Cancel
                          </button>

                          <button
                            type="button"
                            className="px-3 py-1 rounded bg-pink-600 text-white text-sm"
                            onClick={() => {
                              setEditingChoiceId(null);
                              if (editingChoiceValue === 'details') {
                                handleEdit(user);
                              } else {
                                // password-only edit handler passed from parent
                                handlePasswordEdit(user);
                              }
                            }}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleDelete(user.id);
                    }}
                    data-no-toggle
                  >
                    Delete
                  </Button>
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t">
                  <div
                    className="grid gap-4"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
                  >
                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Full Name
                      </div>
                      <div className="mt-1">{displayName}</div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Username
                      </div>
                      <div className="mt-1">@{user.username}</div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Email
                      </div>
                      <div className="mt-1">{user.email}</div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Role
                      </div>
                      <div className="mt-1">{user.role ?? '—'}</div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Created
                      </div>
                      <div className="mt-1 text-sm">
                        {user.createdAt ? new Date(user.createdAt).toLocaleString() : '—'}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Updated
                      </div>
                      <div className="mt-1 text-sm">
                        {user.updatedAt ? new Date(user.updatedAt).toLocaleString() : '—'}
                      </div>
                    </div>

                    <div className="md:col-span-1 lg:col-span-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        About
                      </div>
                      <div className="mt-1 whitespace-pre-line text-sm text-foreground">
                        {user.about ?? '—'}
                      </div>
                    </div>

                    {Object.entries(user)
                      .filter(
                        ([k]) =>
                          ![
                            'id',
                            'firstName',
                            'lastName',
                            'username',
                            'email',
                            'role',
                            'about',
                            'image',
                            'createdAt',
                            'updatedAt',
                          ].includes(k)
                      )
                      .map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {key}
                          </div>
                          <div className="mt-1 text-sm">{String(value ?? '—')}</div>
                        </div>
                      ))}
                  </div>

                  {/* Password management UI is still available inside expanded view,
                      but admins can now directly jump to a password-only edit flow via the Edit -> Password only choice. */}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
