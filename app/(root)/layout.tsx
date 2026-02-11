import Footer from '@/components/footer';
import Breadcrumb from '@/components/shared/breadcrumb/breadcrumb';
import Header from '@/components/shared/header';
import ScrollProgressBar from '@/components/shared/scroll/scrollProgressBar';
import ScrollToTopButton from '@/components/shared/scroll/scrollToTop';
import { QueryProvider } from './providers/query-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <ScrollProgressBar />
        {/* <Breadcrumb /> */}
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </QueryProvider>
  );
}
