'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

type LocationType = {
  id?: string | number;
  locationName?: string;
  latitude?: number | null;
  longitude?: number | null;
};
type InstitutionType = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  logo?: string | null;
  institutionImages?: string[] | null;
  headName?: string | null;
  institutionType?: string | null;
  locations?: LocationType[] | null;
  createdAt?: string | Date | null;
  updatedAt?: string | Date | null;
  createdBy?: { firstName?: string | null; lastName?: string | null } | null;
};

/**
 * InstitutionView - shows details for an institution
 */
export default function InstitutionView({
  data,
  onClose,
}: {
  data: InstitutionType | null | undefined;
  onClose?: () => void;
}) {
  if (!data) return null;

  const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '-';
  const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '-';

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {data.headName ? `Head: ${data.headName}` : null}
            {data.createdBy ? (
              <span className="ml-3">
                · Created by: {data.createdBy.firstName ?? ''} {data.createdBy.lastName ?? ''}
              </span>
            ) : null}
          </div>
        </div>

        <div className="text-sm text-gray-500 text-right">
          <div>
            Email: <span className="font-medium">{data.email ?? '-'}</span>
          </div>
          <div>
            Phone: <span className="font-medium">{data.phone ?? '-'}</span>
          </div>
        </div>
      </div>

      {/* Logo */}
      {data.logo && (
        <div>
          <div className="text-sm text-gray-500">Logo</div>
          <div className="mt-2">
            <img
              src={data.logo}
              alt={`${data.name} logo`}
              className="w-32 h-32 object-cover rounded border"
            />
          </div>
        </div>
      )}

      {/* Images */}
      {Array.isArray(data.institutionImages) && data.institutionImages.length > 0 && (
        <div>
          <div className="text-sm text-gray-500 mb-2">Images</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.institutionImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="institution"
                className="w-full h-28 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

      {/* Locations */}
      {Array.isArray(data.locations) && data.locations.length > 0 && (
        <div>
          <div className="text-sm text-gray-500 mb-2">Locations</div>
          <ul className="list-disc pl-5">
            {data.locations.map((loc) => (
              <li key={String(loc.id) || `${loc.locationName}`}>
                {loc.locationName ?? '-'}{' '}
                {loc.latitude !== undefined && loc.longitude !== undefined
                  ? `· (${loc.latitude}, ${loc.longitude})`
                  : null}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Created: {created} · Updated: {updated}
        </div>
        <div className="flex gap-2">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
