import Script from 'next/script';
import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const jbm = JetBrains_Mono({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={`${inter.className}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Script async src="https://www.zhcndoc.com/js/common.js"></Script>
        <Script id="wwads-inject" strategy="afterInteractive">
          {`
            (function () {
              function injectAdsIntoLayout() {
                const tocRoot = document.getElementById("nd-toc");
                if (!tocRoot) return;

                const firstChild = tocRoot.firstElementChild;
                if (!firstChild) return;

                if (firstChild.querySelector(".wwads-cn.wwads-vertical")) return;

                const verticalAd = document.createElement("div");
                verticalAd.className = "wwads-cn wwads-vertical";
                verticalAd.setAttribute(
                  "style",
                  "max-width: 200px; margin-top: 0; margin-bottom: 1rem; flex-shrink: 0;"
                );
                verticalAd.setAttribute("data-id", "354");
                firstChild.insertBefore(verticalAd, firstChild.firstChild);
              }

              function runWhenDomReady(fn) {
                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", fn, { once: true });
                } else {
                  fn();
                }
              }

              runWhenDomReady(() => {
                injectAdsIntoLayout();

                const observer = new MutationObserver(() => {
                  injectAdsIntoLayout();
                });

                observer.observe(document.body, {
                  childList: true,
                  subtree: true,
                });
              });
            })();
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
      {/* {process.env.trackerId && (
        <Script defer data-website-id={process.env.trackerId} src="https://umami.is/u.js" />
      )} */}
    </html>
  );
}
