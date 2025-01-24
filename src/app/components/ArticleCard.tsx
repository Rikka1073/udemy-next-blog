import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <article className="shadow my-4" key={article.id}>
      <Link href={`/articles/${article.id}`} className="hover:opacity-75">
        <Image
          src="https://fastly.picsum.photos/id/143/1000/500.jpg?hmac=UlpjMqhIO6lj882FrhxWKwURhkEKW8_HFTAcUhzFXIw"
          alt="1"
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          Technology
        </Link>
        <Link
          href={`/articles/${article.id}`}
          className="text-slate-900 text-3xl hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="tex-xm text-slate-900 pb-3">{article.createdAt}</p>
        <Link href={`/articles/${article.id}`} className=" text-slate-900 pb-6">
          {article.content.length > 70 ? article.content.substring(0, 70) + "..." : article.content}
        </Link>
        <Link href={`/articles/${article.id}`} className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
