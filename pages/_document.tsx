import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Making your next open-source contribution make the world better. For Good First Issue is a curated list of accessible issues from open-source projects helping our communities. Start today!"
        />

        <meta property="og:url" content="https://forgoodfirstissue.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="For Good First Issue | Make your next open-source contribution matter."
        />
        <meta property="og:image" content="https://forgoodfirstissue.dev/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="forgoodfirstissue.dev" />
        <meta property="twitter:url" content="https://forgoodfirstissue.dev" />
        <meta
          name="twitter:title"
          content="For Good First Issue | Make your next open-source contribution matter."
        />
        <meta
          name="twitter:description"
          content="Making your next open-source contribution make the world better. For Good First Issueis a curated list of accessible issues from open-source projects helping our communities. Start today!"
        />
        <meta name="twitter:image" content="https://forgoodfirstissue.dev/" />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
