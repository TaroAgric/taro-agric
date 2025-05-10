"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";

// interface Article {
//   id: string;
//   title: string;
//   author: string;
//   date: string;
//   image: string;
//   subHeading?: string;
//   body?: string;
// }

export default function Articles() {
  // const [articles, setArticles] = useState<Article[]>([]);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       const res = await fetch("/articlesFolder/articles.json");
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch articles");
  //       }
  //       const data = await res.json();
  //       setArticles(data);
  //     } catch (err) {
  //       setError((err as Error).message);
  //     }
  //   }

  //   fetchArticles();
  // }, []);

  // if (error) {
  //   return <p className="text-red-500">Error: {error}</p>;
  // }

  // if (articles.length === 0) {
  //   return <p className="text-gray-500">Loading articles...</p>;
  // }

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold p-5 text-black text-center">
        This page is coming soon.
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-black text-center font-bold">
                {article.title}
              </h2>
              <p className=""></p>

              <Link
                href={`/resources/articles/${article.id}`}
                className="text-blue-500 text-center hover:underline mt-4 block"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
