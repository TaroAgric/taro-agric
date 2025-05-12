import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ArticleMeta {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

export function getArticles(): ArticleMeta[] {
  const articlesDir = path.join(process.cwd(), "src/content/articles");
  const files = fs.readdirSync(articlesDir);

  return files
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
}
