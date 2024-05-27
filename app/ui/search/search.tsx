"use client";

import SearchBar from "./search-bar";
import ResultsList from "./results-list";
import FilterButton from "../filter/filter-button";
import FilterBar from "../filter/filter-bar";
import Metrics from "../metrics/metrics";
import { useState } from "react";

export default function Search({ query }: { query: string }) {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-4 rounded px-2 pt-4 pb-2">
      <article className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center">
          <SearchBar />
          <FilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>
        {query !== "" && <ResultsList query={query} />}
      </article>
      {showFilters && <FilterBar />}
      <Metrics />
    </section>
  );
}
