"use client";
import React, { useEffect, useState } from "react";
import CardManga from "./CardManga";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";

interface GenreProps {
  id: string | null;
  page: string | null;
}

const Genres = ({ id, page }: GenreProps) => {
  const [datas, setDatas] = useState([]);
  const [pages, setPages] = useState(page);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/genres?genresId=${id}&page=${pages}`);
      const results = await response.json();
      setDatas(results.comics);
      setTotalPages(results.total_pages);
    };
    fetchData();
    UpdateUrl(pages);
  }, [pages]);

  const UpdateUrl = (page: string | null) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (page) {
      searchParams.set("page", page);
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <section className="w-full h-screen mt-2">
      <div className="flex flex-wrap gap-4">
        {datas.map((data, i) => (
          <CardManga key={i} manga={data} />
        ))}
      </div>
      <div className="mt-3 mb-7">
        <Pagination totalPages={totalPages} setPages={setPages} />
      </div>
    </section>
  );
};

export default Genres;
