'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type Message = {
  id: string;
  title: string;
  beneficiaryMessageText: string;
  status: string;
  createdAt: string;
  beneficiary?: {
    firstName: string;
    lastName: string;
  };
};

const BeneficiaryMessagesCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    fetch('/api/beneficiaryMessages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(Array.isArray(data) ? data : []);
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
        Recent Beneficiary Messages
      </h2>
      <div className="space-y-3">
        {loading && <div className="text-center text-sm text-gray-400">Loading...</div>}
        {!loading && messages.length === 0 && (
          <div className="text-center text-sm text-gray-400">No beneficiary messages yet.</div>
        )}
        {!loading &&
          messages.slice(0, 5).map((msg) => (
            <div
              key={msg.id}
              className={`border rounded-lg p-4 transition-colors duration-200 ${
                resolvedTheme === 'dark'
                  ? 'border-gray-700 bg-gray-800'
                  : 'border-pink-100 bg-pink-50'
              }`}
            >
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-lg">{msg.title}</div>
                <div className="text-sm text-gray-500">
                  {msg.beneficiary
                    ? `By ${msg.beneficiary.firstName} ${msg.beneficiary.lastName}`
                    : 'By Beneficiary'}
                  {' • '}
                  <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="mt-2 text-base">
                  {typeof msg.beneficiaryMessageText === 'string'
                    ? msg.beneficiaryMessageText
                    : JSON.stringify(msg.beneficiaryMessageText)}
                </div>
                <div className="mt-1 text-xs text-pink-500 capitalize">{msg.status}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BeneficiaryMessagesCard;
