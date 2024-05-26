"use client";

import SearchBar from "./search-bar";
import ResultsList from "./results-list";
import FilterButton from "../filter-sort/filter-button";
import FilterBar from "../filter-sort/filter-bar";
import Metrics from "../Metrics";
import { useState } from "react";

export default function Search({ query }: { query: string }) {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <article className="flex flex-col gap-2 w-full">
        <div className="flex gap-2">
          <SearchBar />
          <FilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>
        {query !== "" && <ResultsList query={query} />}
      </article>
      {showFilters && <FilterBar />}
      <Metrics />
    </div>
  );
}
