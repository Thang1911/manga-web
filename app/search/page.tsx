"use client";
import { Search } from "@/components";
import React from "react";

const page = () => {
    return (
      <main className="flex w-full h-screen overflow-hidden bg-slate-200">
        <div className="w-full h-screen">
          <Search/>
        </div>
      </main>
    );
};

export default page;
