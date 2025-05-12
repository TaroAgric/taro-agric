// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { getArticles } from "@/lib/articles";
import Link from "next/link";

import React, { useEffect, useState } from "react";

interface ArticleMeta {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

// function getArticles(): ArticleMeta[] {
//   const articlesDir = path.join(process.cwd(), "src/content/articles");
//   const files = fs.readdirSync(articlesDir);

//   return files
//     .filter((file) => file.endsWith(".md"))
//     .map((file) => {
//       const filePath = path.join(articlesDir, file);
//       const content = fs.readFileSync(filePath, "utf8");
//       const { data } = matter(content);

//       return {
//         id: file.replace(".md", ""),
//         title: data.title,
//         author: data.author,
//         date: data.date,
//         image: data.image,
//       };
//     });
// }

export default function Articles() {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // Get list of articles
        const response = await fetch("/api/articles");
        // const response = await fetch("src/content/articles/articles-list.json");
        // const articleFiles = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        // const fetchArticles = await Promise.all(
        //   articleFiles.map(async (file: string) => {
        //     const res = await fetch(`/articles/${file}`);
        //     const text = await res.text();
        //     const { data } = matter(text);
        //     return data as ArticleMeta;
        //   })
        // );

        const data = await response.json();

        // setArticles(fetchArticles);
        setArticles(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <p className="text-gray-500 text-center p-8">Loading articles...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center p-8">Error: {error}</p>;
  }

  // if (articles.length === 0) {
  //   return <p className="text-gray-500">No articles found.</p>;
  // }

  // const articles = getArticles();

  return (
    <div className="flex flex-col items-center justify-center py-5 px-10 max-w-screen-2xl mx-auto">
      {/* <h1 className="text-2xl font-bold p-5 text-black text-center">
        This page is coming soon.
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 self-center">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-black text-center font-bold">
                {article.title}
              </h2>
              <div className="flex justify-between text-xs text-gray-600 mb-4">
                <span>By {article.author}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>

              <Link
                href={`/resources/articles/${article.id}`}
                className="text-blue-500 text-end hover:underline mt-4 block"
              >
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
