import React from "react";
import { ParsedUrlQuery, stringify } from "querystring";
import { getMangaDetail } from "@/utils";
import { chaptersProps, genresProps } from "@/types";
import Link from "next/link";

interface ParamsProps {
  params: ParsedUrlQuery;
}

const page = async ({ params }: ParamsProps) => {
  const paramUrl = stringify(params);
  const query = paramUrl.substring(6, paramUrl.length);
  const listMangaDetail = await getMangaDetail(query);
  const listGenresManga = await listMangaDetail.genres;
  const listMangaChapters = await listMangaDetail.chapters;

  return (
    <div className="flex-grow h-screen bg-black">
      <header className="text-white sticky top-0 h-20 z-10 text-4xl bg-neutral-800 p-8 flex items-center font-bold">
        <div className="flex items-center">
          <p>{listMangaDetail?.title}</p>
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-neutral-900 h-80 text-white p-8`}
      >
        {listMangaDetail && (
          <img
            src={listMangaDetail.thumbnail}
            alt="image"
            className="h-52 w-52 rounded-md"
          />
        )}
        <div className=" text-white">
          <p className="text-xl md:text-3xl lg:text-5xl font-extrabold">
            {listMangaDetail?.title}
          </p>
          <p>Author: {listMangaDetail.authors}</p>
          <p>
            {listGenresManga.map((genres: genresProps) => {
              return (
                <>
                  <Link
                    href={{
                      pathname: "/genres",
                      query: { genresId: genres.id, page: "1" },
                    }}
                    key={genres.id}
                  >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1">
                      {genres.name}
                    </button>
                  </Link>
                </>
              );
            })}
          </p>
          <p className="text-sm font-bold pt-5">
            {listMangaDetail?.description}
          </p>
        </div>
      </section>
      <div className="text-white px-8 flex flex-wrap space-y-1y h-2/4 overflow-y-scroll">
        {listMangaChapters.map((chapter: chaptersProps) => (
          <button
            className="flex-initial bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
            key={chapter.id}
          >
            <Link
              href={`${listMangaDetail.id}/chapter?chapterId=${chapter.id}`}
            >
              {chapter.name}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default page;
