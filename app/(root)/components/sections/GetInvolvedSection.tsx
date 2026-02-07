'use client';

import { useState } from 'react';
import type { Event } from '../../types/home';

interface GetInvolvedSectionProps {
  events: Event[] | null;
}

export default function GetInvolvedSection({ events }: GetInvolvedSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Get Involved
      </h2>

      {/* Events */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Upcoming Events
        </h3>
        {events && events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {event.description}
                </p>
                {event.startAt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {new Date(event.startAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No upcoming events</p>
        )}
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
          Contact Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#9f004d] text-white py-3 rounded-md font-semibold hover:bg-[#7a0039] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
