import Metrics from "../ui/Metrics";
import FilterBar from "../ui/filter-sort/filter-bar";
import NewOptions from "../ui/new-options";
import PreOwnedOptions from "../ui/pre-owned-options";
import PriceHistory from "../ui/price-history";
import Search from "../ui/search";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      <Search />
      <FilterBar />
      <Metrics />
      <hr />
      <NewOptions />
      <PriceHistory />
      <PreOwnedOptions />
    </div>
  );
}
