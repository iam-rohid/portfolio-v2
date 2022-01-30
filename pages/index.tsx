import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogsList from "../components/BlogsList";
import Container from "../components/Container";
import BuyMeACoffeeIcon from "../components/icons/BuyMeACoffeeIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import PetreonIcon from "../components/icons/PetreonIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import NewsLatterForm from "../components/NewsLetterForm";
import ProjectsList from "../components/ProjectsList";
import SectionWithTitle from "../components/SectionWithTitle";
import IconLink from "../components/SocialLinkButton";
import client from "../lib/apolloClient";
import { BlogType, ProjectType } from "../types";

const HomePage = ({
  recentBlogs,
  featuredBlogs,
  featuredProjects,
}: {
  recentBlogs: BlogType[];
  featuredBlogs: BlogType[];
  featuredProjects: ProjectType[];
}) => {
  return (
    <main className="flex flex-col gap-16 py-16">
      <Head>
        <title>Rohidul Islam</title>
        <meta
          name="description"
          content="Tutorials on React, Next.js, HTML, CSS, TypeScript, JavaScript, Tailwind CSS and many more..."
        />
        <meta property="og:title" content="Rohidul Islam" />
        <meta
          property="og:description"
          content="Tutorials on React, Next.js, HTML, CSS, TypeScript, JavaScript, Tailwind CSS and many more..."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://rohidulislam.com/images/avatar.jpg"
        />
        <meta property="og:image:alt" content="Rohidul Islam avatar image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rohidul Islam" />
        <meta name="twitter:creator" content="@rohidisdev" />
        <meta
          name="twitter:descripton"
          content="Tutorials on React, Next.js, HTML, CSS, TypeScript, JavaScript, Tailwind CSS and many more..."
        />
        <meta
          name="twitter:image"
          content="https://rohidulislam.com/images/avatar.jpg"
        />
        <link rel="canonical" href="https://rohidulislam.com" />
      </Head>
      <section>
        <Container>
          <div className="flex gap-8 items-center flex-col-reverse sm:flex-row">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl mb-2 font-bold">Rohidul Islam</h1>
              <h2 className="text-lg mb-2">
                Self thought <b>full-stack developer</b>
              </h2>
              <p className="text-lg mb-6 opacity-75">
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
            <div className="w-40 h-40 relative overflow-hidden rounded-full">
              <Image
                src="/images/avatar.jpg"
                alt="Avatar Image"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
          </div>
        </Container>
      </section>
      {/* <section>
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <StatsItem
              title="All-time Views"
              value="20320"
              href="https://github.com/rohidisdev"
            />
            <StatsItem
              title="GitHub Followers"
              value="20"
              href="https://github.com/rohidisdev"
            />
            <StatsItem
              title="GitHub Stars"
              value="40"
              href="https://github.com/rohidisdev"
            />
            <StatsItem
              title="YouTube Subscribers"
              value="100"
              href="https://github.com/rohidisdev"
            />
            <StatsItem
              title="YouTube Views"
              value="40"
              href="https://github.com/rohidisdev"
            />
            <StatsItem
              title="YouTube Subscribers"
              value="100"
              href="https://github.com/rohidisdev"
            />
          </div>
        </Container>
      </section> */}

      <SectionWithTitle title="Featured Projects">
        <ProjectsList projects={featuredProjects} />
      </SectionWithTitle>

      <SectionWithTitle title="Featured Blogs">
        <BlogsList blogs={featuredBlogs} />
      </SectionWithTitle>

      <SectionWithTitle title="Recent Blogs">
        <BlogsList blogs={recentBlogs} />
      </SectionWithTitle>
      <section>
        <Container>
          <NewsLatterForm />
        </Container>
      </section>
    </main>
  );
};

export default HomePage;

const StatsItem = ({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 px-4 py-6 rounded-xl flex items-center justify-center flex-col gap-2">
          <h3 className="sm:text-xl truncate font-medium">{title}</h3>
          <p className="sm:text-lg opacity-75">{value}</p>
        </div>
      </a>
    </Link>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { blogs: recentBlogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(orderBy: createdAt_DESC, first: 10) {
          slug
          title
          excerpt
          createdAt
          updatedAt
        }
      }
    `,
  });
  const {
    data: { blogs: featuredBlogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(orderBy: createdAt_DESC, first: 3, where: { isFeatured: true }) {
          slug
          title
          excerpt
          createdAt
          updatedAt
        }
      }
    `,
  });

  const {
    data: { projects: featuredProjects },
  } = await client.query({
    query: gql`
      query GetData {
        projects(
          orderBy: createdAt_DESC
          first: 2
          where: { isFeatured: true }
        ) {
          slug
          title
          category {
            slug
            title
          }
          coverPhoto {
            url
          }
          createdAt
          updatedAt
        }
      }
    `,
  });
  return {
    props: {
      recentBlogs,
      featuredBlogs,
      featuredProjects,
    },
  };
};
