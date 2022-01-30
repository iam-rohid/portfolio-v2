import Link from "next/link";
import React from "react";
import { menu } from "../data/menu";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-16">
      <Container>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Rohid</h1>
            <h2 className="text-lg">Thank you so much for visiting 😊</h2>
          </div>
          <div className="flex flex-1 justify-between flex-wrap gap-4">
            <div className="flex flex-col gap-2">
              <b>Menu</b>
              <ul className="flex flex-col gap-1">
                {menu.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>
                      <a className="opacity-75 hover:opacity-100">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <b>Links</b>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="https://www.youtube.com/channel/UCh1no8hy0A5Daj7SVJVH15A">
                    <a className="opacity-75 hover:opacity-100">YouTube</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/rohidisdev">
                    <a className="opacity-75 hover:opacity-100">Twitter</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/rohidisdev">
                    <a className="opacity-75 hover:opacity-100">Instagram</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/rohidisdev">
                    <a className="opacity-75 hover:opacity-100">GitHub</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <b>Support</b>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="https://www.patreon.com/rohid">
                    <a className="opacity-75 hover:opacity-100">Patreon</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.buymeacoffee.com/rohid">
                    <a className="opacity-75 hover:opacity-100">
                      Buy me a coffee
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <b>Legal</b>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="/privacy-policy">
                    <a className="opacity-75 hover:opacity-100">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="opacity-75 py-6">
            Copyright © 2022 Rohidul Islam. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
