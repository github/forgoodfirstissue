import '@primer/react-brand/lib/css/main.css';
import '@primer/react-brand/fonts/fonts.css';
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { AppDataProvider } from "../context/AppDataContext";
import "../styles/globals.scss";
import {ThemeProvider} from '@primer/react-brand'

// Fontawesome and TailwindCSS related settings
//config.autoAddCss = false;

// Entry point for the app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppDataProvider>
        <main>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </AppDataProvider>
    </ThemeProvider>
  );
}
