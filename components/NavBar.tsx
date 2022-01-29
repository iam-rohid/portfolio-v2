import Link from "next/link";
import React, { SVGProps, useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Container from "./Container";
import { useTheme } from "../hooks/useTheme";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Snippets",
    href: "/snippets",
  },
  {
    name: "Support",
    href: "/support",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("overflow-hidden");
    if (showSideBar) {
      document.documentElement.classList.add("overflow-hidden");
    }
  }, []);

  return (
    <nav className={``}>
      <Container className="flex items-center justify-between gap-4 h-20">
        <NavButton
          Icon={showSideBar ? XIcon : MenuIcon}
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className={`flex sm:hidden`}
        />

        <Link href={`/`}>
          <a>
            <h2 className="font-bold text-2xl">Rohid</h2>
          </a>
        </Link>

        <InlineMenu className="hidden sm:flex" />
        <div className="flex-1" />
        <NavButton
          Icon={darkMode ? MoonIcon : SunIcon}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <FullscreenMenu
          className={`fixed left-0 right-0 bottom-0 top-20 sm:hidden ${
            showSideBar
              ? "flex pointer-events-auto"
              : "hidden pointer-events-none"
          }`}
        />
      </Container>
    </nav>
  );
};

export default NavBar;

const NavButton = ({
  Icon,
  onClick,
  className,
}: {
  Icon: (props: SVGProps<SVGElement>) => JSX.Element;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:opacity-75 ${className}`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

const InlineMenu = ({ className }: { className?: string }) => {
  return (
    <ul className={`flex items-center ${className}`}>
      {menu.map((item, i) => (
        <InlineMenuItem name={item.name} href={item.href} key={i} />
      ))}
    </ul>
  );
};

const InlineMenuItem = ({ name, href }: { name: string; href: string }) => {
  return (
    <li>
      <Link href={`${href}`}>
        <a className="whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:opacity-75">
          {name}
        </a>
      </Link>
    </li>
  );
};

const FullscreenMenu = ({ className }: { className?: string }) => {
  return (
    <div className={`p-4 bg-white dark:bg-gray-900 ${className}`}>
      <ul className={`flex flex-col w-full`}>
        {menu.map((item, i) => (
          <FullscreenMenuItem name={item.name} href={item.href} key={i} />
        ))}
      </ul>
    </div>
  );
};

const FullscreenMenuItem = ({ name, href }: { name: string; href: string }) => {
  return (
    <li>
      <Link href={`${href}`}>
        <a className="whitespace-nowrap px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:opacity-75 w-full inline-block">
          {name}
        </a>
      </Link>
    </li>
  );
};
