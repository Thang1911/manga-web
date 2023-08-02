"use client";
import React from "react";
import Genres from "../../components/Genres";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const genresID = searchParams.get("genresId");
  const page = searchParams.get("page");
  

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
        Manga by genres.
      </p>
      <Genres id={genresID} page={page} />
    </div>
  );
};

export default page;
