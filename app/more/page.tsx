"use client";
import { MoreManga, Navbar } from "@/components";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page")?.toString();
  const params = searchParams.get("title");

  return (
    <div className="w-full h-screen">
      <div className="w-full">
        <div className="sticky">
          <Navbar />
        </div>
        <div
          className="w-full overflow-y-scroll"
          style={{ maxHeight: "92vh" }}
        >
          <MoreManga pageNumber={page!} titleManga={params} />
        </div>
      </div>
    </div>
  );
};

export default page;
