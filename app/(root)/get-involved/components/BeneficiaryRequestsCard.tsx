'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type Request = {
  id: string;
  title: string;
  beneficiaryRequestText: string;
  status: string;
  createdAt: string;
  beneficiary?: {
    firstName: string;
    lastName: string;
  };
};

const BeneficiaryRequestsCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    fetch('/api/beneficiaryRequests')
      .then((res) => res.json())
      .then((data) => {
        setRequests(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const containerBg =
    resolvedTheme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-pink-200';
  const titleColor = resolvedTheme === 'dark' ? 'text-pink-300' : 'text-pink-700';

  return (
    <div className={`max-w-none w-full ${containerBg} rounded-2xl shadow ${className}`}>
      <h2 className={`text-2xl font-bold mb-6 text-left ${titleColor}`}>
        Recent Beneficiary Requests
      </h2>
      <div className="space-y-3">
        {loading && <div className="text-center text-sm text-gray-400">Loading...</div>}
        {!loading && requests.length === 0 && (
          <div className="text-center text-sm text-gray-400">No beneficiary requests yet.</div>
        )}
        {!loading &&
          requests.slice(0, 5).map((req) => (
            <div
              key={req.id}
              className={`border rounded-lg p-4 transition-colors duration-200 ${
                resolvedTheme === 'dark'
                  ? 'border-gray-700 bg-gray-800'
                  : 'border-pink-100 bg-pink-50'
              }`}
            >
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-lg">{req.title}</div>
                <div className="text-sm text-gray-500">
                  {req.beneficiary
                    ? `By ${req.beneficiary.firstName} ${req.beneficiary.lastName}`
                    : 'By Beneficiary'}
                  {' • '}
                  <span>{new Date(req.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="mt-2 text-base">
                  {typeof req.beneficiaryRequestText === 'string'
                    ? req.beneficiaryRequestText
                    : JSON.stringify(req.beneficiaryRequestText)}
                </div>
                <div className="mt-1 text-xs text-pink-500 capitalize">{req.status}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BeneficiaryRequestsCard;
