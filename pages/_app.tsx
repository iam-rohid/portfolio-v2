import React, { Fragment } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NavBar from "../components/NavBar";
import ThemeProvider from "../hooks/useTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Fragment>
        <NavBar />
        <Component {...pageProps} />
      </Fragment>
    </ThemeProvider>
  );
};

export default MyApp;
