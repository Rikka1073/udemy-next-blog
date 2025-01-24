import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticles } from "@/blogApi";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailArticles(params.id);
  console.log(detailArticle);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://fastly.picsum.photos/id/143/1000/500.jpg?hmac=UlpjMqhIO6lj882FrhxWKwURhkEKW8_HFTAcUhzFXIw"
        alt="1"
        width={1280}
        height={300}
      />
      <h2 className="text-3xl font-bold mt-5">{detailArticle.title}</h2>
      <div className="leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div>
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
