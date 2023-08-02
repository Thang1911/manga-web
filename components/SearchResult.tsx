import { searchValueProps } from "@/types";
import React, {useMemo} from "react";
import SearchManga from "./SearchManga";

const SearchResult = ({ searchValue }: searchValueProps) => {
  const SearchMangaComponent = useMemo(() => {
    if (searchValue) {
      return <SearchManga searchValue={searchValue} />;
    }
    return <SearchManga searchValue={searchValue} />;
  }, [searchValue])
  return <div>{SearchMangaComponent}</div>;
};

export default SearchResult;
