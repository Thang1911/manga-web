import React from "react";
import { getBoyManga, getGirlManga, getNewUpload } from "@/utils";
import ReuseableSlider from "./slider/slider";
import Link from "next/link";

const Main = async () => {
  const listNewManga = await getNewUpload();
  const listBoyManga = await getBoyManga();
  const listGirlManga = await getGirlManga();
  const isDataEmpty =
    !Array.isArray(listNewManga) || listNewManga.length < 1 || !listNewManga;

  return (
    <div className="flex-grow h-screen overflow-y-scroll">
      <div className="flex flex-col gap-4 px-8 manga_content">
        <div className="flex items-center justify-between mb-4 mt-6 md:mt-12">
          <h2 className="text-xl font-bold">New Manga</h2>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            <Link
              href={{
                pathname: "/more",
                query: { title: "new-manga", page: "1" },
              }}
            >
              <span>More</span>
            </Link>
          </button>
        </div>

        <div>
          {!isDataEmpty ? (
            <section className="h-screen">
              <ReuseableSlider items={listNewManga} />
            </section>
          ) : (
            <div>
              <h2>No result</h2>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-10 px-8 manga_content">
        <div className="flex items-center justify-between mb-4 mt-6 md:mt-12">
          <h2 className="text-xl font-bold">Boy Manga</h2>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            <Link
              href={{
                pathname: "/more",
                query: { title: "boy-manga", page: "1" },
              }}
            >
              <span>More</span>
            </Link>
          </button>
        </div>

        <div>
          {!isDataEmpty ? (
            <section className="h-screen">
              <ReuseableSlider items={listBoyManga} />
            </section>
          ) : (
            <div>
              <h2>No result</h2>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-10 px-8 manga_content">
        <div className="flex items-center justify-between mb-4 mt-6 md:mt-12">
          <h2 className="text-xl font-bold">Girl Manga</h2>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            <Link
              href={{
                pathname: "/more",
                query: { title: "girl-manga", page: "1" },
              }}
            >
              <span>More</span>
            </Link>
          </button>
        </div>

        <div>
          {!isDataEmpty ? (
            <section className="h-screen">
              <ReuseableSlider items={listGirlManga} />
            </section>
          ) : (
            <div>
              <h2>No result</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
