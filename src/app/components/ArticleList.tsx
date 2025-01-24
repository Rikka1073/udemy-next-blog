import { Article } from "@/types";
import React from "react";
import ArticleCard from "./ArticleCard";

type ArticleProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
