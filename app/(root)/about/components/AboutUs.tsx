import type { AboutContent } from '../data';

import OurFoundation from './OurFoundation';
import WhoWeAre from './WhoWeAre';

export default function AboutUs({
  content,
}: {
  content: AboutContent | null;
}) {
  return (
    <section
      aria-label="About GoGirls ICT Initiative"
      className="relative isolate overflow-hidden bg-[#fafafa] py-6 dark:bg-gray-950 sm:py-8 lg:py-10"
    >
      {/* Subtle shared background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]" />

        <div className="absolute -left-48 top-0 h-[480px] w-[480px] rounded-full bg-[#9f004d]/[0.04] blur-[120px] dark:bg-pink-500/[0.05]" />

        <div className="absolute -right-48 bottom-0 h-[480px] w-[480px] rounded-full bg-purple-500/[0.035] blur-[120px] dark:bg-purple-500/[0.045]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300/80 to-transparent dark:via-gray-800" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-[1400px]">
        <WhoWeAre content={content} />

        {/* Separation between the two components */}
        <div
          aria-hidden="true"
          className="mx-auto my-4 flex max-w-lg items-center gap-4 sm:my-6 lg:my-8"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />

          <span className="h-2 w-2 rotate-45 bg-[#9f004d] dark:bg-pink-400" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
        </div>

        <OurFoundation
          content={content}
        />

        {/* Bottom divider */}
        <div
          aria-hidden="true"
          className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#9f004d]/40 dark:to-pink-400/30" />

          <span className="h-2 w-2 rotate-45 bg-[#9f004d] dark:bg-pink-400" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#9f004d]/40 dark:to-pink-400/30" />
        </div>
      </div>
    </section>
  );
}