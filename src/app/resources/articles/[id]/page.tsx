import matter from "gray-matter";
import React from "react";
import ReactMarkdown from "react-markdown";

import fs from "fs";
import path from "path";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { notFound } from "next/navigation";

// interface ArticlePageProps {
//   params: {
//     id: string;
//   };
// }

// type Props = {
//   params: {
//     id: string;
//   };
// };

interface ArticleData {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:3000/articles/articles-list.json");
//   const articleFiles = await res.json();

//   return articleFiles.map((file: string) => {
//     const id = file.replace(".md", "");
//     return { id };
//   });
// }

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), "src/content/articles/");
  const files = fs.readdirSync(articlesDir);

  // return files
  //   .filter((files) => files.endsWith(".md"))
  //   .map((file) => {
  //     const id = file.replace(".md", "");
  //     return { id };
  //   });

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      id: file.replace(".md", ""),
    }));
}

async function getArticleData(id: string): Promise<ArticleData | null> {
  // try {
  //   const res = await fetch(`articles/${id}.md`);
  //   if (!res.ok) return null;

  //   const text = await res.text();
  //   const { data, content } = matter(text);

  //   return {
  //     id: data.id,
  //     title: data.title,
  //     author: data.author,
  //     date: data.date,
  //     image: data.image,
  //     content,
  //   };
  // } catch (err) {
  //   console.error("Error loading article:", err);
  //   return null;
  // }

  try {
    const filePath = path.join(
      process.cwd(),
      "src/content/articles",
      `${id}.md`
    );
    const text = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(text);

    return {
      id: data.id || id,
      title: data.title,
      author: data.author,
      date: data.date,
      image: data.image,
      content,
    };
  } catch (err) {
    console.error("Error loading article:", err);
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticleData(params.id);

  // if (!article) {
  //   return <div className="text-center py-20">Article not found</div>;
  // }

  if (!article) return notFound();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl sm:pt-20 pt-16">
        <article className="prose lg:prose-xl mx-auto ">
          <h1 className="md:text-4xl text-2xl text-black text-center font-bold mb-2">
            {article.title}
          </h1>

          <div className="flex justify-start gap-4 items-center mb-8 text-gray-600 md:text-sm text-xs">
            <p>
              By <span className="font-bold">{article.author}</span>
            </p>
            <p>{new Date(article.date).toLocaleDateString()}</p>
          </div>

          <div className="relative w-full md:h-96 h-40 mb-8 rounded-lg overflow-hidden">
            <Image
              width={200}
              height={200}
              src={article.image}
              alt={article.title}
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="prose lg:prose-xl max-w-none text-gray-800">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
