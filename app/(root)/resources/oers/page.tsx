'use client';

import { useEffect, useRef } from 'react';

const OER_PDF_URL = '/assets/pdfs/oers/Guide1.pdf';

const OersPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.focus();
  }, []);

  return (
    <div className="w-screen h-screen fixed inset-0 bg-black z-40">
      <iframe
        ref={iframeRef}
        src={OER_PDF_URL}
        title="Open Educational Resources"
        className="w-full h-full border-0"
        aria-label="OERs PDF"
      />
    </div>
  );
};

export default OersPage;
// This code defines a React component that displays a PDF document of Open Educational Resources (OERs) in full screen.