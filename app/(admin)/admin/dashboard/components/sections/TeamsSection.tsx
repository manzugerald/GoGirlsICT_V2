'use client';

import React, { useState, useEffect } from 'react';
import { User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

// This section renders Team records defensively — hence one deliberate
// loose alias here instead of scattering `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TeamRecord = any;

export default function TeamsSection({
  paginatedData,
  handleEdit,
  handleDelete,
}: {
  paginatedData: TeamRecord[];
  handleEdit: (record: TeamRecord) => void;
  handleView: (record: TeamRecord) => void;
  handleDelete: (id: string | number) => void;
}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    // debugging helper
    // console.log('TeamsSection session:', session);
  }, [session]);

  function toggleExpand(id: number) {
    setExpandedId((prev) => (prev === id ? null : id));
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

  if (!Array.isArray(paginatedData) || paginatedData.length === 0) {
    return <div className="text-center py-8 text-gray-500">No team members found.</div>;
  }

  return (
    <div className="space-y-4">
      {paginatedData.map((member) => {
        const isExpanded = expandedId === member.id;
        const displayName = [member.firstName, member.lastName].filter(Boolean).join(' ') || '—';
        const cardOverflowClass = isExpanded ? 'overflow-visible' : 'overflow-hidden';

        return (
          <div
            key={member.id}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onClick={(e) => handleCardClick(e, member.id)}
            onKeyDown={(e) => handleCardKeyDown(e, member.id)}
            className={`transition-all rounded-md cursor-pointer focus:outline-pink-500 ${cardOverflowClass}
              ${
                // Card background choices to contrast with parent:
                // - light mode parent is usually gray-50 -> make card white
                // - dark mode parent is dark gray -> make card slightly lighter (gray-800)
                isExpanded
                  ? 'ring-1 ring-pink-200 dark:ring-pink-900 shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md'
              }
              p-0`} /* p-0 since inner upper section has its own padding */
          >
            {/* UPPER PART: profile + meta + actions
                When expanded, give this upper area a distinct site-colored background.
                Use pink tones (site color) for both light and dark modes. */}
            <div
              className={`flex items-center justify-between gap-4 p-4 rounded-t-md transition-colors
                ${isExpanded ? 'bg-pink-50 dark:bg-pink-950' : 'bg-transparent'}`}
            >
              <div className="flex-1 min-w-0 flex items-center gap-3">
                {member.profileImage ? (
                  <img
                    src={member.profileImage}
                    alt={displayName || 'avatar'}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 border">
                    <UserIcon className="w-7 h-7 text-gray-500 dark:text-gray-300" />
                  </div>
                )}

                <div className="flex flex-col min-w-0">
                  <div
                    className={`font-medium text-lg truncate ${
                      isExpanded ? 'text-pink-700 dark:text-pink-300' : ''
                    }`}
                    title={displayName}
                  >
                    {displayName}
                  </div>

                  {/* show email */}
                  <div
                    className={`text-sm truncate ${
                      isExpanded ? 'text-pink-600 dark:text-pink-200' : 'text-muted-foreground'
                    }`}
                  >
                    {member.email ?? '—'}
                  </div>

                  {/* BEFORE CLICK: show short 'about' preview instead of phone */}
                  <div
                    className={`text-sm truncate ${
                      isExpanded ? 'text-pink-600 dark:text-pink-200' : 'text-muted-foreground'
                    }`}
                  >
                    {member.about ? member.about : '—'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    toggleExpand(member.id);
                  }}
                  data-no-toggle
                >
                  {isExpanded ? 'Hide' : 'View'}
                </Button>

                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    handleEdit(member);
                  }}
                  data-no-toggle
                >
                  Edit
                </Button>

                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (confirm('Delete this team member?')) handleDelete(member.id);
                  }}
                  data-no-toggle
                >
                  Delete
                </Button>
              </div>
            </div>

            {isExpanded && (
              <div className="p-4 border-t bg-white dark:bg-gray-800 rounded-b-md">
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
                >
                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Full name
                    </div>
                    <div className="mt-1">{displayName}</div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </div>
                    <div className="mt-1">{member.email ?? '—'}</div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Phone
                    </div>
                    <div className="mt-1">{member.phone ?? '—'}</div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Active
                    </div>
                    <div className="mt-1">{member.isActive ? 'Yes' : 'No'}</div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      LinkedIn
                    </div>
                    <div className="mt-1">
                      {member.linkedInUrl ? (
                        <a
                          href={member.linkedInUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-pink-600 dark:text-pink-400 underline"
                        >
                          Profile
                        </a>
                      ) : (
                        '—'
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Facebook
                    </div>
                    <div className="mt-1">
                      {member.facebookUrl ? (
                        <a
                          href={member.facebookUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-pink-600 dark:text-pink-400 underline"
                        >
                          Profile
                        </a>
                      ) : (
                        '—'
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">X</div>
                    <div className="mt-1">
                      {member.xUrl ? (
                        <a
                          href={member.xUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-pink-600 dark:text-pink-400 underline"
                        >
                          Profile
                        </a>
                      ) : (
                        '—'
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-1 lg:col-span-2">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      About
                    </div>
                    <div className="mt-1 whitespace-pre-line text-sm text-foreground">
                      {member.about ?? '—'}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Created
                    </div>
                    <div className="mt-1 text-sm">
                      {member.createdAt ? new Date(member.createdAt).toLocaleString() : '—'}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Updated
                    </div>
                    <div className="mt-1 text-sm">
                      {member.updatedAt ? new Date(member.updatedAt).toLocaleString() : '—'}
                    </div>
                  </div>

                  {Object.entries(member)
                    .filter(
                      ([k]) =>
                        ![
                          'id',
                          'firstName',
                          'lastName',
                          'profileImage',
                          'about',
                          'email',
                          'phone',
                          'linkedInUrl',
                          'facebookUrl',
                          'xUrl',
                          'websiteUrl',
                          'isActive',
                          'createdAt',
                          'updatedAt',
                          'createdById',
                          'updatedById',
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
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
