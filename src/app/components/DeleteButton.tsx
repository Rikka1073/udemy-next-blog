"use client";
import { dleteArticles } from "@/blogApi";
import { useRouter } from "next/navigation";

import React from "react";

type DeleteButtonProps = {
  id: string;
};
const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await dleteArticles(id);
    router.push("/");
  };

  return (
    <div
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      削除
    </div>
  );
};

export default DeleteButton;
