'use client';

import { useEffect } from 'react';

// The Facebook JS SDK's global isn't part of the standard DOM lib types.
type WindowWithFB = typeof window & { FB?: { XFBML: { parse: () => void } } };

export default function FacebookFeed() {
  useEffect(() => {
    // Check if FB SDK is already loaded
    if (typeof window !== 'undefined') {
      const win = window as WindowWithFB;
      if (!win.FB) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
        script.onload = () => {
          if (win.FB) win.FB.XFBML.parse();
        };
        document.body.appendChild(script);
      } else {
        win.FB.XFBML.parse();
      }
    }
  }, []);

  return (
    <div className="w-full h-full overflow-hidden rounded-xl border bg-background p-4">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/GoGirlsICT"
        data-tabs="timeline"
        data-width="340"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote cite="https://www.facebook.com/GoGirlsICT" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/GoGirlsICT">GoGirls ICT Initiative</a>
        </blockquote>
      </div>
    </div>
  );
}
