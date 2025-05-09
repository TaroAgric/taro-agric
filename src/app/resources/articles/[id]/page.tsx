// // "use client";
// // import { useRouter } from "next/router";
// import { useParams } from "next/navigation";
// import path from "path";
// import fs from "fs";
// import React from "react";

// interface Article {
//   id: string;
//   title: string;
//   author: string;
//   date: string;
//   image: string;
//   subHeading: string;
//   body: string;
// }

// // Load all articles from master JSON
// async function getAllArticles(): Promise<Article[]> {
//   const baseUrl =
//     process.env.NODE_ENV === "production"
//       ? process.env.NEXT_PUBLIC_BASE_URL || ""
//       : "";

//   const res = await fetch(`${baseUrl}/articlesFolder/articles.json`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch articles");
//   }
//   return res.json();
// }

// // Fetch specific articles using master JSON
// async function fetchArticles(id: string): Promise<Article | undefined> {
//   const articles = await getAllArticles();
//   return articles.find((article) => article.id === id);
// }

export async function generateStaticParams() {
  //   const articles = await getAllArticles();

  //   return articles.map((article) => ({
  //     id: article.id,
  //   }));
  // }

  // export default async function ArticlePage({
  //   params,
  // }: {
  //   params: { id: string };
  // }) {
  //   const { id } = params;

  //   let article;
  //   try {
  //     article = await fetchArticles(id);
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     return <p className="text-black">Error loading article.</p>;
  //   }

  //   if (!article) {
  //     return <p className="text-black">Article not found.</p>;
  //   }

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      {/* <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-5"
      />
      <h1 className="text-3xl text-black font-bold">{article.title}</h1>
      <p className="text-sm text-gray-600">
        By {article.author} on {article.date}
      </p>

      <h2 className="text-xl text-black font-semibold mt-4">
        {article.subHeading}
      </h2>
      <p className="text-gray-700 mt-4">{article.body}</p> */}
    </div>
  );
}
