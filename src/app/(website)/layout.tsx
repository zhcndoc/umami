import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Suspense } from 'react';
import Script from 'next/script';
import { AxiomWebVitals } from 'next-axiom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import '@/styles/github-dark.css';
import '@/styles/variables.css';
import '@/styles/global.css';
import '@umami/react-zen/dist/zen.css';
import '@umami/react-zen/dist/index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" data-scroll="0">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            src="https://analytics.ikxin.com/script.js"
            data-website-id="f0e90b0d-e086-4fdc-b173-de4857b71900"
          ></script>
        )}
        <GoogleAnalytics gaId="G-HYH4TH7PWM" />
      </head>
      <body>
        <Suspense>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Suspense>
      </body>
      <AxiomWebVitals />
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s – Umami 中文文档',
    default: 'Umami 中文文档',
  },
};
