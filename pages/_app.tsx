import "@primer/react-brand/lib/css/main.css";
import "@primer/react-brand/fonts/fonts.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { AppDataProvider } from "../context/AppDataContext";
import "../styles/globals.scss";
import { ThemeProvider as PrimerThemeProvider } from "@primer/react-brand";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function AppWithTheme({ Component, pageProps }: AppProps) {
  const { colorMode } = useTheme();

  return (
    <PrimerThemeProvider
      colorMode={colorMode}
      style={{ backgroundColor: "var(--brand-color-canvas-default)" }}
    >
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
    </PrimerThemeProvider>
  );
}

// Fontawesome and TailwindCSS related settings
//config.autoAddCss = false;

// Entry point for the app
export default function App(props: AppProps) {
  return (
    <ThemeProvider>
      <AppWithTheme {...props} />
    </ThemeProvider>
  );
}
