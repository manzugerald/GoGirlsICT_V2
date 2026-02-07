'use client';

import MessageCard from '@/components/shared/cards/messageCard';
import type { ExecutiveMessage } from '../../types/home';

interface MessagesSectionProps {
  messages: ExecutiveMessage[] | null;
}

export default function MessagesSection({ messages }: MessagesSectionProps) {
  if (!messages || messages.length === 0) return null;

  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Messages from Leadership
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {messages.slice(0, 2).map((msg) => (
          <MessageCard
            key={msg.id}
            name={msg.name}
            title={msg.title}
            affiliated={msg.affiliated}
            message={msg.message}
            imageUrl={msg.nameImageUrl}
          />
        ))}
      </div>
    </div>
  );
}
