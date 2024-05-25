import ResultsList from "./results-list";
import SearchBar from "./search-bar";

export default function Search({ query }: { query: string }) {
  return (
    <div>
      <SearchBar />
      {query !== "" && <ResultsList query={query} />}
    </div>
  );
}
