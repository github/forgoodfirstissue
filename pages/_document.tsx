import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Making your next open-source contribution make the world better. Happy Commits is a curated list of accessible issues from open-source projects helping our communities. Start today!"
        />

        <meta property="og:url" content="https://happycommits.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Happy Commits | Make your next open-source contribution matter."
        />
        <meta property="og:image" content="https://happycommits.dev/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="happycommits.dev" />
        <meta property="twitter:url" content="https://happycommits.dev" />
        <meta
          name="twitter:title"
          content="Happy Commits | Make your next open-source contribution matter."
        />
        <meta
          name="twitter:description"
          content="Making your next open-source contribution make the world better. Happy Commits is a curated list of accessible issues from open-source projects helping our communities. Start today!"
        />
        <meta name="twitter:image" content="https://happycommits.dev/meta.png" />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KV9HDNBZ1L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KV9HDNBZ1L');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
