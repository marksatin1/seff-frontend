import NewOptions from "../ui/results/new-options";
import PreOwnedOptions from "../ui/results/pre-owned-options";
import PriceHistoryBanner from "../ui/banners/price-history-banner";
import Search from "../ui/search/search";
import CtaBanner from "../ui/banners/cta-banner";

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
    <div className="flex flex-col gap-3">
      <Search query={query} />
      <div className="">
        <hr />
      </div>
      <CtaBanner />
      <NewOptions />
      <PriceHistoryBanner />
      <PreOwnedOptions />
    </div>
  );
}
