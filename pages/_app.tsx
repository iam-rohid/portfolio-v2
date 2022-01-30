import React, { Fragment } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import NavBar from "../components/NavBar";
import ThemeProvider from "../hooks/useTheme";
import Footer from "../components/Footer";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Fragment>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default MyApp;
