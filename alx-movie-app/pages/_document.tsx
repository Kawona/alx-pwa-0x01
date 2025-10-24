import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* This line links your PWA manifest file */}
        <link rel="manifest" href="/manifest.json" />
        {/* Defines your browser theme color (for address bar and splash screen) */}
        <meta name="them-color" content="#0070f3" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
