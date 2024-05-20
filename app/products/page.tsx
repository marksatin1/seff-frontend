import FilterBar from "@/app/ui/filter-sort/filter-bar";
import SortBar from "../ui/filter-sort/sort-bar";

export default function SearchResultsPage() {
  return (
    <div className="w-full h-full">
      <FilterBar />
      <SortBar />
    </div>
  );
}
