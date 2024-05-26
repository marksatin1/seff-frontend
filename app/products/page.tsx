import Metrics from "../ui/Metrics";
import FilterBar from "../ui/filter-sort/filter-bar";
import FilterButton from "../ui/filter-sort/filter-button";
import NewOptions from "../ui/new-options";
import PreOwnedOptions from "../ui/pre-owned-options";
import PriceHistory from "../ui/price-history";
import ResultsList from "../ui/search/results-list";
import Search from "../ui/search/search";
import SearchBar from "../ui/search/search-bar";

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="flex flex-col gap-5">
      <Search query={query} />
      <hr />
      <NewOptions />
      <PriceHistory />
      <PreOwnedOptions />
    </div>
  );
}
