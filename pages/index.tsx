import { HomeIcon, LinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import BuyMeACoffeeIcon from "../components/icons/BuyMeACoffeeIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import PetreonIcon from "../components/icons/PetreonIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import PostCard from "../components/PostCard";
import IconLink from "../components/SocialLinkButton";

const HomePage = () => {
  return (
    <main>
      <section>
        <Container>
          <div className="flex gap-8 mt-16 items-center flex-col-reverse sm:flex-row">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl mb-2 font-bold">Rohidul Islam</h1>
              <h2 className="text-lg mb-2">
                Self thought <b>full-stack developer</b>
              </h2>
              <p className="text-lg mb-6">
                I do web development with React/Next.js. Learning SwiftUI and
                iOS development.
              </p>
              <ul className="flex items-center justify-center sm:justify-start gap-6">
                <IconLink
                  Icon={GitHubIcon}
                  name="GitHub"
                  href="https://github.com/rohidisdev"
                />
                <IconLink
                  Icon={TwitterIcon}
                  name="Twitter"
                  href="https://twitter.com/rohidisdev"
                />
                <IconLink
                  Icon={InstagramIcon}
                  name="Instagram"
                  href="https://instagram.com/rohidisdev"
                />
                <IconLink
                  Icon={BuyMeACoffeeIcon}
                  name="Buy me a coffee"
                  href="https://www.buymeacoffee.com/rohid"
                />
                <IconLink
                  Icon={PetreonIcon}
                  name="Petreon"
                  href="https://www.patreon.com/rohid"
                />
              </ul>
            </div>
            <div className="w-40 h-40">
              <img
                src="/images/avatar.jpg"
                alt="Avatar Image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-4">Featured Posts</h3>
            <div className="flex flex-col gap-2">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            <Link href="#">
              <a className="pt-2 inline-block">See all posts</a>
            </Link>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-4">Recent Posts</h3>
            <div className="flex flex-col gap-2">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
