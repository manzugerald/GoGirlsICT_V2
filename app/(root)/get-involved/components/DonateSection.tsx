'use client';

import { useState, type FormEvent } from 'react';
import { Check, HandCoins } from 'lucide-react';

const PRESET_AMOUNTS = [5, 10, 25, 50, 100] as const;

const MIN_AMOUNT = 5;

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] =
    useState<number>(PRESET_AMOUNTS[0]);

  const [customAmount, setCustomAmount] =
    useState('');

  const [isCustom, setIsCustom] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const amount = isCustom
    ? Number(customAmount)
    : selectedAmount;

  const isValidAmount =
    Number.isFinite(amount) &&
    amount >= MIN_AMOUNT;

  function selectPreset(value: number) {
    setIsCustom(false);
    setSelectedAmount(value);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!isValidAmount) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <section
      id="donate"
      aria-labelledby="donate-heading"
      className="scroll-mt-20 bg-white py-8 dark:bg-gray-900 sm:scroll-mt-24 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-[90%] max-w-3xl text-center">
        <h2
          id="donate-heading"
          className="heading-2 text-site-primary"
        >
          Make a{' '}
          <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Donation
          </span>
        </h2>

        <p className="body-lg mx-auto mt-4 max-w-2xl text-site-secondary">
          Every contribution helps us
          reach more girls with technology
          education and opportunity.
          Donations start at just $
          {MIN_AMOUNT}.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left dark:border-gray-800 dark:bg-gray-950 sm:mt-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <Check className="h-6 w-6" />
              </span>

              <p className="font-serif text-[length:calc(1.125rem*var(--font-scale))] font-semibold text-gray-900 dark:text-white">
                Thank you for your
                generosity!
              </p>

              <p className="text-[length:calc(0.875rem*var(--font-scale))] text-gray-500 dark:text-gray-400">
                Online payments are
                launching soon. We'll be
                in touch about completing
                your ${amount} donation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <span className="mb-3 flex items-center gap-2 text-[length:calc(0.875rem*var(--font-scale))] font-semibold text-gray-700 dark:text-gray-200">
                  <HandCoins
                    aria-hidden="true"
                    className="h-4 w-4 text-[#9f004d] dark:text-pink-400"
                  />
                  Choose an amount
                </span>

                <div className="grid grid-cols-3 gap-2">
                  {PRESET_AMOUNTS.map(
                    (value) => {
                      const active =
                        !isCustom &&
                        selectedAmount ===
                          value;

                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            selectPreset(
                              value
                            )
                          }
                          aria-pressed={
                            active
                          }
                          className={`rounded-xl border px-3 py-2 text-[length:calc(0.875rem*var(--font-scale))] font-semibold transition-colors ${
                            active
                              ? 'border-[#9f004d] bg-[#9f004d] text-white'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-[#9f004d]/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'
                          }`}
                        >
                          $
                          {value}
                        </button>
                      );
                    }
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setIsCustom(true)
                    }
                    aria-pressed={isCustom}
                    className={`rounded-xl border px-3 py-2 text-[length:calc(0.875rem*var(--font-scale))] font-semibold transition-colors ${
                      isCustom
                        ? 'border-[#9f004d] bg-[#9f004d] text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#9f004d]/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'
                    }`}
                  >
                    Other
                  </button>
                </div>
              </div>

              {isCustom && (
                <div>
                  <label
                    htmlFor="custom-amount"
                    className="mb-1.5 block text-[length:calc(0.875rem*var(--font-scale))] font-semibold text-gray-700 dark:text-gray-200"
                  >
                    Custom amount (USD)
                  </label>

                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[length:calc(0.875rem*var(--font-scale))] text-gray-400">
                      $
                    </span>

                    <input
                      id="custom-amount"
                      type="number"
                      min={MIN_AMOUNT}
                      step="1"
                      inputMode="numeric"
                      value={customAmount}
                      onChange={(event) =>
                        setCustomAmount(
                          event.target
                            .value
                        )
                      }
                      placeholder={String(
                        MIN_AMOUNT
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-7 pr-3 text-[length:calc(0.875rem*var(--font-scale))] text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                  </div>

                  {!isValidAmount &&
                    customAmount !==
                      '' && (
                      <p className="mt-1.5 text-[length:calc(0.75rem*var(--font-scale))] text-red-500">
                        Minimum donation
                        is ${MIN_AMOUNT}
                        .
                      </p>
                    )}
                </div>
              )}

              <button
                type="submit"
                disabled={!isValidAmount}
                className="w-full rounded-full bg-[#9f004d] px-6 py-3 text-[length:calc(0.875rem*var(--font-scale))] font-bold text-white shadow-md transition-all hover:bg-[#8a0042] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Donate $
                {isValidAmount
                  ? amount
                  : MIN_AMOUNT}
              </button>

              <p className="text-center text-[length:calc(0.75rem*var(--font-scale))] text-gray-400 dark:text-gray-500">
                Secure online payments are
                coming soon.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
