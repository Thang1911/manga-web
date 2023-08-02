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
  const [data, setData] = useState([]);
  const [defaultValue, setDefaultValue] = useState("");
  const [chapters, setChapters] = useState([]);
  const searchParams = useSearchParams();
  const chapterId = searchParams.get("chapterId") as unknown as number;
  const query = params.title as string;

  const getChapterDetail = async () => {
    const response = await fetch(
      `/api/${query}/chapter?chapterId=${chapterId}`
    );
    const result = await response.json();
    setData(result);
    setChapters(result.chapters);
    setDefaultValue(result.chapter_name);
  };

  useEffect(() => {
    getChapterDetail();
  }, []);

  useEffect(() => {
    const chapterNewProps: NewProps[] = cover(chapters);
    setChapterNewProps(chapterNewProps);
  }, [chapters]);

  const cover = (chapters: chaptersProps[]) => {
    return chapters.map((chapter, index) => ({
      value: chapter.id,
      label: chapter.name,
      index: index,
    }));
  };

  const [ChapterNewProps, setChapterNewProps] = useState<NewProps[]>(
    cover(chapters)
  );

  return (
    <div className="flex-grow h-screen bg-black">
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
