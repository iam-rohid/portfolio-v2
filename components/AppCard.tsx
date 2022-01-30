import Link from "next/link";
import React from "react";
import { AppType } from "../types";
import Image from "next/image";

const AppCard = ({ app }: { app: AppType }) => {
  return (
    <Link href={app.href}>
      <a target={app.targetBlank ? "_blank" : "_self"}>
        <article className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 flex flex-col overflow-hidden">
          <div className="relative aspect-[2/1] flex-[2] w-full">
            <Image
              src={app.coverImage.url}
              alt="App Thumbnail"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex-[3]">
            <div className="flex flex-col gap-2 p-4">
              <h4 className="font-bold flex-1 text-xl mb-1">{app.title}</h4>
              <p className="opacity-75">{app.description}</p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default AppCard;
