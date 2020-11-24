import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter, NextRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import '../styles/global.css';
import 'typeface-roboto';
import { ThemeProvider } from '../context/theme-context';

export default function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('ILBUCPDU', {
      url: 'https://ptarmigan.codebycorey.com/script.js',
      excludedDomains: ['localhost']
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  });
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
