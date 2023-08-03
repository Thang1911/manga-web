"use client";
import React, { useState, useEffect } from "react";
import { ParsedUrlQuery } from "querystring";
import { useSearchParams } from "next/navigation";
import DropDown from "@/components/DropDown";
import { chaptersProps } from "@/types";

interface ParamsProps {
  params: ParsedUrlQuery;
}

export interface NewProps {
  value: number;
  label: string;
  index: number;
}

const Chapter = ({ params }: ParamsProps) => {
  const [defaultValue, setDefaultValue] = useState("");
  const searchParams = useSearchParams();
  const chapterId = searchParams.get("chapterId") as unknown as number;
  const query = params.title as string;

  const getChapterDetail = async () => {
    const response = await fetch(
      `/api/${query}/chapter?chapterId=${chapterId}`
    );
    const result = await response.json();
    setDefaultValue(result.chapter_name);
  };

  useEffect(() => {
    getChapterDetail();
  }, []);
  
  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-black">
      {defaultValue !== "" ? (
        <DropDown
          nameManga={query}
          ChapterId={chapterId}
          defaultValue={defaultValue}
        />
      ) : null}
    </div>
  );
};

export default Chapter;
