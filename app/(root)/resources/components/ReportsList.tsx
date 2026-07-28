import { FileText } from 'lucide-react';

import EmptyState from '@/app/(root)/components/shared/page/EmptyState';

import type {
  ReportListItem as ReportListItemType,
} from '../data';

import ReportListItem from './ReportListItem';

export default function ReportsList({
  reports,
}: {
  reports: ReportListItemType[];
}) {
  return (
    <section className="pb-12 pt-20 sm:pb-16 sm:pt-24">
      <div className="mx-auto w-[90%]">
        <header className="mb-7">
          <h1 className="heading-2 text-site-primary">
            Published Reports
          </h1>

          <p className="body mt-2 text-site-secondary">
            Select a report to open its PDF
            document.
          </p>
        </header>

        {reports.length > 0 ? (
          <ul className="space-y-4">
            {reports.map((report) => (
              <ReportListItem
                key={report.id}
                report={report}
              />
            ))}
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