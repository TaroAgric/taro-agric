import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  const articlesDir = path.join(process.cwd(), "src/content/articles");
  const files = fs.readdirSync(articlesDir);

  const articles = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(articlesDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      const { data } = matter(content);

      return {
        id: file.replace(".md", ""),
        title: data.title,
        author: data.author,
        date: data.date,
        image: data.image,
      };
    });

  return NextResponse.json(articles);
}
