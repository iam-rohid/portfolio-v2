import Link from "next/link";
import React from "react";

const SnippetCard = () => {
  return (
    <Link href="#">
      <a>
        <article className="bg-white dark:bg-gray-800 border overflow-hidden border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 p-4">
          <div className="flex justify-between items-center mb-2 gap-2">
            <p className="px-2.5 font-medium py-1 bg-gray-100 dark:bg-gray-700 rounded-md truncate">
              React Hook
            </p>
            <p className="opacity-75 truncate">24 Jan, 2022</p>
          </div>
          <h4 className="font-medium flex-1 text-xl">
            React DarkMode with Context
          </h4>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non.
          </p>
        </article>
      </a>
    </Link>
  );
};

export default SnippetCard;
