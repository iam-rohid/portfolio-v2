import React, { Fragment } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NavBar from "../components/NavBar";
import ThemeProvider from "../hooks/useTheme";
import Footer from "../components/Footer";
import "../styles/main.scss";
import Script from "next/script";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Fragment>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default MyApp;
