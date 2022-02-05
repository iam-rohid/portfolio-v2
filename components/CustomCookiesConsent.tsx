import Link from "next/link";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { useTheme } from "../hooks/useTheme";

const CustomCookiesConsent = () => {
  const { darkMode } = useTheme();
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Understand"
      declineButtonText="Decline"
      cookieName="myAwesomeCookieName2"
      expires={300}
      enableDeclineButton
      buttonWrapperClasses="flex flex-row-reverse px-4 gap-4"
      style={{
        backgroundColor: darkMode ? "#27272A" : "#fff",
        alignItems: "center",
        position: "fixed",
        left: "1rem",
        right: "1rem",
        bottom: "1rem",
        width: "auto",
        top: "auto",
        height: "auto",
        inset: "auto 1rem 1rem",
        borderRadius: "0.75rem",
        padding: "0.5rem",
        color: "inharit",
      }}
      buttonStyle={{
        backgroundColor: "#6365F1",
        color: "#fff",
        padding: "0.7rem 1.2rem",
        borderRadius: "0.5rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "1rem",
        margin: "unset",
      }}
      declineButtonStyle={{
        backgroundColor: "transparent",
        border: "2px solid #6365F1",
        color: "#6365F1",
        padding: "0.7rem 1.2rem",
        borderRadius: "0.5rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        margin: "unset",
      }}
    >
      <div className="text-gray-900 dark:text-white">
        <p className="text-2xl font-bold">This site uses Cookies 🍪</p>
        <p>
          This website uses cookies to enhance the user experience. Read more
          about our{" "}
          <Link href="/privacy-policy">
            <a className="font-bold">Privacy policy</a>
          </Link>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CustomCookiesConsent;
