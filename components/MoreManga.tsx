"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import CardManga from "./CardManga";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";

interface props {
  pageNumber: string;
  titleManga: string | null;
}

const MoreManga = ({ pageNumber, titleManga }: props) => {
  const [pages, setPages] = useState(pageNumber);
  const [totalPages, setTotalPages] = useState(1);
  const [datas, setDatas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (titleManga && pages) {
      const fetchData = async () => {
        const response = await fetch(
          `/api/more?title=${titleManga}&page=${pages}`
        );
        const results = await response.json();
        setDatas(results.comics);
        setTotalPages(results.total_pages);
      };
      fetchData();
      UpdateUrl(pages);
    }
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
      <div className="mt-3 mb-2">
          <Pagination
            totalPages={totalPages}
            setPages={setPages}
          />
      </div>
    </section>
  );
};

export default MoreManga;
