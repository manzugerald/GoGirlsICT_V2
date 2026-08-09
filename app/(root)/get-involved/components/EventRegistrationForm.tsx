'use client';

import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';

export default function EventRegistrationForm({
  eventTitle,
  maxAttendees,
}: {
  eventTitle: string;
  maxAttendees: number | null;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [attendees, setAttendees] =
    useState(1);

  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim()
    ) {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
          <Check className="h-5 w-5" />
        </span>

        <div>
          <p className="text-[length:calc(0.875rem*var(--font-scale))] font-semibold text-emerald-800 dark:text-emerald-300">
            You&apos;re on the list!
          </p>

          <p className="mt-0.5 text-[length:calc(0.75rem*var(--font-scale))] text-emerald-700 dark:text-emerald-400">
            We&apos;ll email your
            confirmation for &ldquo;
            {eventTitle}&rdquo; soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 sm:grid-cols-2"
    >
      <div>
        <label
          htmlFor="reg-name"
          className="mb-1 block text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-gray-600 dark:text-gray-300"
        >
          Full name
        </label>

        <input
          id="reg-name"
          type="text"
          required
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[length:calc(0.875rem*var(--font-scale))] text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="reg-email"
          className="mb-1 block text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-gray-600 dark:text-gray-300"
        >
          Email
        </label>

        <input
          id="reg-email"
          type="email"
          required
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[length:calc(0.875rem*var(--font-scale))] text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="reg-phone"
          className="mb-1 block text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-gray-600 dark:text-gray-300"
        >
          Phone (optional)
        </label>

        <input
          id="reg-phone"
          type="tel"
          value={phone}
          onChange={(event) =>
            setPhone(event.target.value)
          }
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[length:calc(0.875rem*var(--font-scale))] text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="reg-attendees"
          className="mb-1 block text-[length:calc(0.75rem*var(--font-scale))] font-semibold text-gray-600 dark:text-gray-300"
        >
          Attendees
        </label>

        <input
          id="reg-attendees"
          type="number"
          min={1}
          max={
            maxAttendees ?? undefined
          }
          value={attendees}
          onChange={(event) =>
            setAttendees(
              Number(
                event.target.value
              ) || 1
            )
          }
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[length:calc(0.875rem*var(--font-scale))] text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-[#9f004d] px-6 py-2.5 text-[length:calc(0.875rem*var(--font-scale))] font-bold text-white shadow-sm transition-colors hover:bg-[#8a0042]"
        >
          Register for this event
        </button>

        <p className="mt-2 text-center text-[length:calc(0.75rem*var(--font-scale))] text-gray-400 dark:text-gray-500">
          Registration confirmations
          are launching soon.
        </p>
      </div>
    </form>
  );
}
