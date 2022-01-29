import Link from "next/link";
import React, { SVGProps } from "react";

const IconLink = ({
  Icon,
  href,
  name,
}: {
  Icon: (props: SVGProps<SVGElement>) => JSX.Element;
  href: string;
  name?: string;
}) => {
  return (
    <Link href={href}>
      <a target="_blank" className="opacity-75 hover:opacity-100" title={name}>
        <Icon className="w-7 h-7" />
      </a>
    </Link>
  );
};

export default IconLink;
