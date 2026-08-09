import { FileText } from 'lucide-react';

import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import type { ReportSummary } from '../data';

import ReportCard from './ReportCard';

export default function ReportsGrid({
  reports,
}: {
  reports: ReportSummary[];
}) {
  return (
    <section className="relative overflow-hidden py-12 dark:bg-gray-950 sm:py-16 lg:py-20">
      <div className="relative mx-auto w-[90%] max-w-4xl">
        {reports.length > 0 ? (
          <ul className="space-y-3">
            {reports.map(
              (report, index) => (
                <ReportCard
                  key={report.id}
                  report={report}
                  index={index}
                />
              )
            )}
          </ul>
        ) : (
          <EmptyState
            title="No Reports Yet"
            description="Published reports will appear here."
            icon={
              <FileText className="h-16 w-16" />
            }
          />
        )}
      </div>
    </section>
  );
}
