import { NewProps } from "@/app/mangaDetail/[title]/chapter/page";
import { chaptersProps } from "@/types";
import React, { FC, useEffect, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import SliderManga from "./slider/sliderManga";

const DropDown: FC<{
  nameManga: string;
  ChapterId: number;
}> = ({ nameManga, ChapterId }) => {
  const router = useRouter();
  const [value, setValue] = useState(ChapterId);
  const [defaultLabel, setDefaultLabel] = useState("");
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [chapters, setChapters] = useState([]);

  const getChapterDetail = async () => {
    const response = await fetch(
      `/api/${nameManga}/chapter?chapterId=${value}`
    );
    const result = await response.json();
    setData(result.images);
    setChapters(result.chapters);
    setDefaultLabel(result.chapter_name);
  };

  useEffect(() => {
    getChapterDetail();
    UpdateUrl(value);
  }, [value]);

  const UpdateUrl = (value: number | null) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (value) {
      searchParams.set("chapterId", value.toString());
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const findIndexByName = (id: number) => {
    return ChapterNewProps.findIndex((array) => array.value == id);
  };

  const handleLoad = () => {
    const Index = findIndexByName(value);
    setIndex(Index);
  };

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

  useEffect(() => {
    const chapterNewProps: NewProps[] = cover(chapters);
    setChapterNewProps(chapterNewProps);
  }, [chapters]);

  useEffect(() => {
    handleLoad();
  }, [ChapterNewProps]);

  const handleChange = (selectedOption: NewProps | null) => {
    if (selectedOption) {
      setValue(selectedOption.value);
      setDefaultLabel(selectedOption.label);

      const currentIndex = ChapterNewProps.findIndex(
        (option: { value: number }) => option.value === selectedOption.value
      );
      setIndex(currentIndex);
    }
  };

  const handleNext = () => {
    const nextIndex = index + 1;
    if (nextIndex >= 0 && nextIndex < ChapterNewProps.length) {
      setValue(ChapterNewProps[nextIndex].value);
      setIndex(nextIndex);
      setDefaultLabel(ChapterNewProps[nextIndex].label);
    }
  };

  const handlePrev = () => {
    const prevIndex = index - 1;
    if (prevIndex >= 0 && prevIndex < ChapterNewProps.length) {
      setValue(ChapterNewProps[prevIndex].value);
      setIndex(prevIndex);
      setDefaultLabel(ChapterNewProps[prevIndex].label);
    }
  };

  return (
    <>
      <header className="text-white sticky top-0 h-20 z-10 text-4xl bg-neutral-800 p-8 flex items-center font-bold">
        <div className="flex items-center">
          <p>{defaultLabel}</p>
        </div>
      </header>
      <div className="flex flex-wrap justify-center items-center m-3 gap-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
          Prev
        </button>
        <Select
          options={ChapterNewProps}
          onChange={handleChange}
          isSearchable={false}
          value={ChapterNewProps[index]}
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handlePrev}
        >
          Next
        </button>
      </div>
      <section className="w-full h-full overflow-y-scroll">
        <div className="w-full h-3/5">
          <SliderManga images={data} />
        </div>
      </section>
    </>
  );
};

export default DropDown;
