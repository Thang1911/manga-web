"use client";
import React, { useState } from "react";
import CardManga from "./CardManga";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (query !== "") {
      const response = await fetch(`/api/search?query=${query}`);
      const result = await response.json();
      setResults(result);
    }
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="shadow appearance-none border rounded w-56 me-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="submit"
        >
          Search
        </button>
      </form>
      <section className="w-full sreen overflow-y-scroll mt-4">
        <div className="flex flex-wrap gap-4">
          {results.map((result, i) => (
            <CardManga key={i} manga={result} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
