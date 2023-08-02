import { genresProps } from "@/types";
import { getGenres } from "@/utils";
import Link from "next/link";
import React from "react";

const Sidebar = async () => {
  const listGenres = await getGenres();
  return (
    <div className="w-60 grow-0 shrink-0 h-screen border-r border-neutral-300 flex flex-col px-4 space-y-4">
      <div className="">LOGO</div>
      <Link
        href="/"
        className="flex m-2 items-center space-x-2 hover:text-neutral-400"
      >
        Home
      </Link>
      <Link
        href="/search"
        className="flex m-2 items-center space-x-2 hover:text-neutral-400"
      >
        Search
      </Link>

      <hr className="border-black" />
      <p>Genres</p>
      <div className="overflow-y-scroll w-52 flex flex-col px-4">
        {listGenres.map((genres: genresProps) => (
          <Link
            href={{ pathname: "/genres", query: { genresId: genres.id, page: '1'} }}
            key={genres.id}
            className="flex m-2 items-center space-x-2 hover:text-neutral-400 pb-1"
          >
            {genres.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
