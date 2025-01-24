import { Article } from "./types";
import { notFound } from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Error");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const articles = await res.json();
  return articles;
};

export const getDetailArticles = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, { next: { revalidate: 60 } });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Error");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const article = await res.json();
  return article;
};

export const createArticles = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentData = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentData }),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const newarticle = await res.json();
  return newarticle;
};
