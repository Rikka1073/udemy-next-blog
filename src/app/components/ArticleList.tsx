import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 ">
        <Link href="#" className="hover:opacity-75">
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
          <Link href="#" className="text-slate-900 text-3xl hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="tex-xm text-slate-900 pb-3">Publish on 2025/01/22</p>
          <Link href="" className=" text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente quidem
            libero velit quas, labore quaerat iure hic culpa, eaque vero numquam porro ipsam. In
            nobis voluptates eos omnis porro.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
