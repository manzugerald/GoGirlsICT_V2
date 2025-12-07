'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import '@/assets/styles/tiptap-editor.css';

// Use the viewer for read-only rich text display (if any rich text fields)
const TiptapJsonViewer = dynamic(() => import('@/components/editor/tiptap-json-viewer'), {
  ssr: false,
});

type BeneficiaryLike = {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  email?: string | null;
  phone?: string | null;
  dateOfBirth?: string | null;
  beneficiaryStatus?: string | null;
  images?: string[] | null;
  institution?: { name?: string | null } | null;
  createdAt?: string | null;
  updatedAt?: string | null;

  // optional server-provided counts
  messageCount?: number | null;
  responseCount?: number | null;
};

export default function BeneficiaryView({
  data,
  onClose,
}: {
  data: BeneficiaryLike;
  onClose?: () => void;
}) {
  const { data: session } = useSession();
  const role = (session as any)?.user?.role ?? 'guest';
  const isPrivileged = role === 'super' || role === 'admin' || role === 'moderator';
  const isSelfBeneficiary =
    role === 'beneficiary' &&
    !!data &&
    // infer beneficiary identity from session first/last name match when possible
    (session as any)?.user?.firstName &&
    (session as any)?.user?.lastName &&
    (session as any).user.firstName.trim().toLowerCase() ===
      (data.firstName ?? '').trim().toLowerCase() &&
    (session as any).user.lastName.trim().toLowerCase() ===
      (data.lastName ?? '').trim().toLowerCase();

  const [messageCount, setMessageCount] = useState<number | null>(
    typeof data?.messageCount === 'number' ? data.messageCount : null
  );
  const [responseCount, setResponseCount] = useState<number | null>(
    typeof data?.responseCount === 'number' ? data.responseCount : null
  );
  const [countsLoading, setCountsLoading] = useState(false);

  useEffect(() => {
    // If counts are already provided by the server in `data`, don't fetch.
    if (messageCount !== null && responseCount !== null) return;

    // Only attempt to fetch counts if this view is for the logged-in beneficiary (self)
    // or the current user is privileged (admin/super/moderator).
    if (!isSelfBeneficiary && !isPrivileged) return;

    // Try a few strategies to obtain counts:
    // 1) /api/beneficiaries/:id/counts (preferred if you provide it)
    // 2) fallback to fetching messages and responses filtered by beneficiaryId (if supported)
    async function fetchCounts() {
      if (!data?.id) return;
      setCountsLoading(true);

      try {
        // try dedicated endpoint first
        const countsRes = await fetch(`/api/beneficiaries/${data.id}/counts`);
        if (countsRes.ok) {
          const json = await countsRes.json();
          if (typeof json.messageCount === 'number') setMessageCount(json.messageCount);
          if (typeof json.responseCount === 'number') setResponseCount(json.responseCount);
          setCountsLoading(false);
          return;
        }
      } catch {
        // ignore and fallback
      }

      try {
        // fallback: fetch messages for beneficiary and count
        const msgsRes = await fetch(
          `/api/messages?beneficiaryId=${encodeURIComponent(data.id as string)}`
        );
        if (msgsRes.ok) {
          const msgs = await msgsRes.json();
          if (Array.isArray(msgs)) setMessageCount(msgs.length);
        }
      } catch {
        // ignore
      }

      try {
        // fallback: fetch responses for beneficiary by relying on responses API to filter by message->beneficiary
        const resRes = await fetch(
          `/api/responses?beneficiaryId=${encodeURIComponent(data.id as string)}`
        );
        if (resRes.ok) {
          const rs = await resRes.json();
          if (Array.isArray(rs)) setResponseCount(rs.length);
        }
      } catch {
        // ignore
      }

      setCountsLoading(false);
    }

    fetchCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id, isSelfBeneficiary, isPrivileged]);

  // Render a compact card for beneficiary (for self) or a full info card (for privileged users)
  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 bg-background rounded-xl shadow p-6">
      <div className="flex items-start justify-between">
        <h2 className="font-semibold text-xl">Beneficiary</h2>
        <div className="text-sm text-gray-600">
          {countsLoading ? (
            'Loading counts…'
          ) : (
            <>
              <div>
                <strong>Messages:</strong> {messageCount !== null ? messageCount : 'N/A'}
              </div>
              <div>
                <strong>Responses:</strong> {responseCount !== null ? responseCount : 'N/A'}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <strong>Name:</strong> {data.firstName ?? '-'} {data.lastName ?? ''}
          </div>

          {isPrivileged && (
            <>
              <div>
                <strong>Gender:</strong> {data.gender ?? '-'}
              </div>
              <div>
                <strong>Email:</strong> {data.email ?? '-'}
              </div>
              <div>
                <strong>Phone:</strong> {data.phone ?? '-'}
              </div>
              <div>
                <strong>Date of Birth:</strong>{' '}
                {data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : '-'}
              </div>
              <div>
                <strong>Status:</strong> {data.beneficiaryStatus ?? '-'}
              </div>
            </>
          )}

          {!isPrivileged && (
            <>
              {/* For non-privileged beneficiaries (self) show limited contact info */}
              <div>
                <strong>Email:</strong> {data.email ? maskEmail(data.email) : '-'}
              </div>
              <div>
                <strong>Phone:</strong> {data.phone ? maskPhone(data.phone) : '-'}
              </div>
            </>
          )}
        </div>

        <div>
          {Array.isArray(data.images) && data.images.length > 0 && (
            <div>
              <strong>Images:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.images.map((img: string, idx: number) =>
                  img ? (
                    <img
                      key={idx}
                      src={img}
                      alt={`Beneficiary image ${idx + 1}`}
                      className="max-w-xs max-h-64 rounded shadow border"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : null
                )}
              </div>
            </div>
          )}

          {isPrivileged && (
            <div className="mt-4">
              <div>
                <strong>Institution:</strong> {data.institution?.name ?? '-'}
              </div>
              <div>
                <strong>Created At:</strong>{' '}
                {data.createdAt ? new Date(data.createdAt).toLocaleString() : '-'}
              </div>
              <div>
                <strong>Updated At:</strong>{' '}
                {data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-'}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        {onClose && (
          <button className="px-4 py-2 bg-pink-700 text-white rounded" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}

// small helpers to avoid showing raw contact details to other beneficiaries
function maskEmail(e: string) {
  try {
    const [local, domain] = e.split('@');
    if (!local || !domain) return e;
    if (local.length <= 2) return `*@${domain}`;
    return `${local[0]}${'*'.repeat(Math.max(1, local.length - 2))}${local.slice(-1)}@${domain}`;
  } catch {
    return e;
  }
}

function maskPhone(p: string) {
  const digits = p.replace(/\D/g, '');
  if (digits.length <= 4) return '****';
  return `${'*'.repeat(Math.max(0, digits.length - 4))}${digits.slice(-4)}`;
}
