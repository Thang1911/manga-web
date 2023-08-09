"use client";
import React, { useState, useEffect } from "react";
import { ParsedUrlQuery } from "querystring";
import { useSearchParams } from "next/navigation";
import DropDown from "@/components/DropDown";

interface ParamsProps {
  params: ParsedUrlQuery;
}

export interface NewProps {
  value: number;
  label: string;
  index: number;
}

const Chapter = ({ params }: ParamsProps) => {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get("chapterId") as unknown as number;
  const query = params.title as string;

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-black">
      <DropDown nameManga={query} ChapterId={chapterId} />
    </div>
  );
};

export default Chapter;
