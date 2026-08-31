'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Check,
  Copy,
  Mail,
} from 'lucide-react';

const EMAIL_LOCAL = 'info';
const EMAIL_DOMAIN = 'gogirlsict.org';

function playCopySound() {
  try {
    // Safari's legacy vendor-prefixed constructor isn't in the standard DOM lib types.
    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine';

    oscillator.frequency.setValueAtTime(
      1046.5,
      context.currentTime
    );

    gain.gain.setValueAtTime(
      0.18,
      context.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      context.currentTime + 0.16
    );

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.16);

    oscillator.onended = () => {
      context.close();
    };
  } catch {
    /*
     * Audio feedback is a nice-to-have; never let it
     * block the copy action if playback fails.
     */
  }
}

export default function ContactSection() {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        `${EMAIL_LOCAL}@${EMAIL_DOMAIN}`
      );

      setCopied(true);
      playCopySound();

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
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

        <div className="relative mx-auto mt-8 max-w-md rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:mt-10">
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

          <div
            role="status"
            aria-live="polite"
            className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center"
          >
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: -6,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg dark:bg-white dark:text-gray-900"
                >
                  <Check className="h-3.5 w-3.5" />
                  Copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
