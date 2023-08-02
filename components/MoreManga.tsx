"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import CardManga from "./CardManga";
import { buttonProps } from "@/types";
import { Button } from ".";
import { useRouter } from "next/navigation";

interface props {
  pageNumber: string | null;
  titleManga: string | null;
}

const MoreManga = ({ pageNumber, titleManga }: props) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [pages, setPages] = useState(pageNumber);
  const [datas, setDatas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/more?title=${titleManga}&page=${pages}`
      );
      const results = await response.json();
      setDatas(results);
    };
    fetchData();
    UpdateUrl(pages);
  }, [pages]);

  const buttons: buttonProps[] = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
  ];

  const buttons2: buttonProps[] = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
  ];

  const handelActive = (buttonId: number, buttonlabel: string) => {
    setActiveButton(buttonId);
    setPages(buttonlabel);
  };

  const UpdateUrl = (page: string | null) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (page) {
      searchParams.set("pages", page);
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
        <div className="flex flex-wrap gap-4 justify-center items-center content-center">
          {titleManga === "girl-manga"
            ? buttons2.map((button) => (
                <Button
                  key={button.id}
                  button={button}
                  isActive={activeButton === button.id}
                  onClick={handelActive}
                />
              ))
            : buttons.map((button) => (
                <Button
                  key={button.id}
                  button={button}
                  isActive={activeButton === button.id}
                  onClick={handelActive}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default MoreManga;
