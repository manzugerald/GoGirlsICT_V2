'use client';

import { useState } from 'react';
import {
  Check,
  Copy,
  Mail,
} from 'lucide-react';

const EMAIL_LOCAL = 'info';
const EMAIL_DOMAIN = 'gogirlsict.org';

export default function ContactSection() {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        `${EMAIL_LOCAL}@${EMAIL_DOMAIN}`
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      /*
       * Clipboard access may be unavailable.
       * The obfuscated address remains visible so the
       * visitor can enter it manually.
       */
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-gray-50 py-8 dark:bg-gray-950 sm:scroll-mt-24 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-[90%] max-w-3xl text-center">
        <h2
          id="contact-heading"
          className="heading-2 text-site-primary"
        >
          Get in{' '}
          <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="body-lg mx-auto mt-4 max-w-2xl text-site-secondary">
          Have a question, partnership
          idea, or just want to say
          hello? Reach out by email.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:mt-10">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400">
            <Mail
              aria-hidden="true"
              className="h-6 w-6"
            />
          </span>

          <p className="mt-4 select-all font-serif text-[length:calc(1.25rem*var(--font-scale))] font-semibold text-gray-900 dark:text-white">
            {EMAIL_LOCAL}[at]
            {EMAIL_DOMAIN}
          </p>

          <p className="mt-1 text-[length:calc(0.75rem*var(--font-scale))] text-gray-500 dark:text-gray-400">
            Replace [at] with @
          </p>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={
              copied
                ? 'Email address copied'
                : 'Copy email address'
            }
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-[length:calc(0.875rem*var(--font-scale))] font-semibold text-gray-600 transition-colors hover:border-[#9f004d]/30 hover:text-[#9f004d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-300 dark:hover:border-pink-500/30 dark:hover:text-pink-400 dark:focus-visible:ring-offset-gray-900"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy email
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
