import React from "react";
import Image from "next/image";
import { mangaProps } from "@/types";
import Link from "next/link";

interface MangaProps {
  manga: mangaProps;
}

const CardManga = ({ manga }: MangaProps) => {
  const { thumbnail, title, authors, id } = manga;
  return (
    <Link href={`/mangaDetail/${id}`}>
      <div className="cursor-pointer relative group w-64 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4">
        <div className="relative justify-center item-center w-52 h-52 my-3 object-contain">
          <Image
            src={thumbnail}
            alt="image_manga"
            fill
            priority
            className="object-containne"
          />
        </div>
        <div>
          <p className="text-base text-white mb-1 w-48 truncate ">{title}</p>
          <p className="text-sm text-neutral-400 mb-8 w-48 truncate">
            {authors}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardManga;
