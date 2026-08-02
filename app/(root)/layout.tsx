import Footer from '@/components/footer';
import Header from '@/components/shared/header';
import ScrollToTopButton from '@/components/shared/scroll/scrollToTop';

import { QueryProvider } from './providers/query-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <ScrollToTopButton />
      </div>
    </QueryProvider>
  );
}