import ViewMoreButton from "./view-more-button";
import { preOwnedSearchResults } from "../../lib/data/dummy-search-results";
import { PreOwnedSearchResultType } from "../../lib/definitions";
import PreOwnedSearchResult from "./pre-owned-search-result";
import Sorter from "./sorter";

export default function PreOwnedOptions() {
  return (
    <article>
      <section className="flex justify-between items-center my-2">
        <h4 className="text-3xl tracking-wide">Pre-Owned</h4>
        <Sorter />
      </section>
      <section className="flex flex-col gap-3">
        {preOwnedSearchResults.map((result: PreOwnedSearchResultType, idx: number) => (
          <PreOwnedSearchResult
            key={`${result}-${idx}`}
            sellerLogo={result.sellerLogo}
            authScore={result.authScore}
            hits={result.hits}
            priceLow={result.priceLow}
            priceHigh={result.priceHigh}
            financierLogo={result.financierLogo}
          />
        ))}
      </section>
      <ViewMoreButton />
    </article>
  );
}
