import Head from "next/head";
import React from "react";

const CustomHead = ({
  title,
  description,
  image,
  alt,
  canonical,
  keywords,
}: {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  canonical: string;
  keywords?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content={keywords ?? "Rohidul Islam, Rohid, rohidisdev"}
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={image ?? "https://rohidulislam.com/images/avatar.jpg"}
      />
      <meta
        property="og:image:alt"
        content={alt ?? "Rohidul Islam avatar image"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@rohidisdev" />
      <meta name="twitter:descripton" content={description} />
      <meta
        name="twitter:image"
        content={image ?? "https://rohidulislam.com/images/avatar.jpg"}
      />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default CustomHead;
