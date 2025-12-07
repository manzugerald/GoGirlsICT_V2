'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

type FAQAccordionProps = {
  className?: string;
};

const FAQS = [
  {
    question: 'What is GoGirls ICT Initiative?',
    answer: (
      <>
        GoGirls ICT Initiative is a nonprofit based in Juba, South Sudan, founded in 2015 and
        registered officially in 2019. It was created by young women with backgrounds in computer
        science, ICT4D innovation, hacktivism, and peace-building.
      </>
    ),
  },
  {
    question: 'What is the vision of GoGirls ICT Initiative?',
    answer: (
      <>
        Their vision is to: <br />
        <span className="italic">
          “Spark imaginations and curiosity in generations of problem solvers—especially girls and
          women—to use technology to innovate and create lasting solutions in their local
          communities.”
        </span>
      </>
    ),
  },
  {
    question: 'What is their mission?',
    answer: (
      <>
        Their mission is summarized in three core actions:
        <ul className="list-disc pl-5 mt-2">
          <li>Engage</li>
          <li>Educate</li>
          <li>Empower</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What are GoGirls ICT’s core values?',
    answer: (
      <>
        They include: Creativity, Innovation, Collaboration, Open‑Mindedness, Flexibility,
        Responsibility, Consistency, and Positivity.
      </>
    ),
  },
  {
    question: 'What programs or projects do they run?',
    answer: (
      <div className="space-y-2">
        <div>
          <span className="font-semibold">#defyhatenow:</span> A hate‑speech mitigation program
          involving monthly workshops with young people on digital safety, fake-news identification,
          and conflict mitigation.
        </div>
        <div>
          <span className="font-semibold">Time To Shine ICT (#TTOSICT):</span> A long‑running
          mentorship program promoting ICT skills among youth and women, supported by partnerships
          like UNDP and AkiraChix.
        </div>
        <div>
          <span className="font-semibold">#ASKrIoT / #ASKnet:</span> IoT-focused mentorship projects
          that build university student capacity in open-source innovation to solve community
          challenges.
        </div>
        <div>
          <span className="font-semibold">Gosanitize:</span> A social‑enterprise initiative
          producing affordable quality hand sanitizers locally.
        </div>
        <div>
          <span className="font-semibold">Gender Narratives Through the Lens (#GNTL):</span> A
          virtual mentorship hub combining audio content, filmmaking, and entrepreneurial skills
          training for women and girls.
        </div>
        <div>
          <span className="font-semibold">Repair Cafes:</span> Hands-on workshops where teachers
          learn device-repair skills to sustain educational technology locally.
        </div>
        <div>
          <span className="font-semibold">Family Visit Program:</span> Outreach to parents of
          mentees to educate families about GoGirls programs, student progress, and behavior
          support.
        </div>
      </div>
    ),
  },
  {
    question: 'Who supports GoGirls ICT Initiative?',
    answer: (
      <>
        They collaborate with partners including USAID, UNDP, INTERNEWS, Germany’s r0g agency,
        AkiraChix, NCA, and the Embassy of Canada in South Sudan, among others.
      </>
    ),
  },
];

const FAQAccordion: React.FC<FAQAccordionProps> = ({ className = '' }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { resolvedTheme } = useTheme();

  // Theme-aware classes
  const containerBg =
    resolvedTheme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-pink-200';
  const titleColor = resolvedTheme === 'dark' ? 'text-pink-300' : 'text-pink-700';
  const questionBg = (open: boolean) =>
    open
      ? resolvedTheme === 'dark'
        ? 'bg-pink-950 text-pink-100'
        : 'bg-pink-50 text-pink-800'
      : resolvedTheme === 'dark'
      ? 'bg-gray-800 text-gray-100 hover:bg-pink-950 hover:text-pink-100'
      : 'bg-white text-gray-900 hover:bg-pink-50';
  const answerBg =
    resolvedTheme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-700';

  return (
    <div className={`max-w-none w-full ${containerBg} rounded-2xl shadow ${className}`}>
      <h2 className={`text-2xl font-bold mb-6 text-left ${titleColor}`}>
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const open = openIndex === idx;
          return (
            <div
              key={faq.question}
              className={`border rounded-lg overflow-hidden transition-colors duration-200 ${
                resolvedTheme === 'dark' ? 'border-gray-700' : 'border-pink-200'
              }`}
            >
              <button
                className={`w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium transition-colors duration-200 ${questionBg(
                  open
                )}`}
                onClick={() => setOpenIndex(open ? -1 : idx)}
                aria-expanded={open}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>
                  {idx + 1}. {faq.question}
                </span>
                <svg
                  className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-4 pb-4 text-base transition-all duration-300 ${
                  open ? 'block' : 'hidden'
                } ${answerBg}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
