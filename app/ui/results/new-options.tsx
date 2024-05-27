import InfoChip from "../chips/info-chip";
import NewSearchResult from "./new-search-result";
import { newSearchResults } from "../../lib/data/dummy-search-results";
import { NewSearchResultType } from "../../lib/definitions";
import Sorter from "./sorter";
import ViewMoreButton from "./view-more-button";

export default function NewOptions() {
  return (
    <article className="mt-2">
      <section className="flex justify-between items-center">
        <h3 className="text-4xl tracking-wide">New Options</h3>
        <Sorter />
      </section>
      <section className="my-2">
        <InfoChip message="Rank based on price and sales stack" />
        <InfoChip message="Prices include all taxes and fees" />
      </section>
      <section className="flex flex-col gap-3">
        {newSearchResults.map((result: NewSearchResultType, idx: number) => (
          <NewSearchResult
            key={`${result}-${idx}`}
            sellerLogo={result.sellerLogo}
            authScore={result.authScore}
            price={result.price}
            financierLogo={result.financierLogo}
          />
        ))}
      </section>
      <ViewMoreButton />
    </article>
  );
}
