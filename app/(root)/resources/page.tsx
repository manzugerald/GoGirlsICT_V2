import { redirect } from 'next/navigation';

/*
 * The Resources hub now lives at /reports (podcasts + reports).
 * This route is kept only to redirect any old bookmarks/links.
 */
export default function ResourcesPage() {
  redirect('/reports');
}
