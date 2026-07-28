import { Loader2 } from 'lucide-react';

export default function TeamLoadingState() {
  return (
    <div className="flex min-h-[380px] items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9f004d]/10 dark:bg-pink-500/20">
          <Loader2 className="h-8 w-8 animate-spin text-[#9f004d] dark:text-pink-400" />
        </div>

        <h2 className="heading-3 mt-5 text-site-primary">
          Loading Our Team
        </h2>

        <p className="body mt-2 text-site-secondary">
          Preparing the team directory.
        </p>
      </div>
    </div>
  );
}