import MoreButton from "./more-button";
import { preOwnedSearchResults } from "../lib/data/dummy-search-results";
import { PreOwnedSearchResultPropTypes } from "../lib/definitions";
import PreOwnedSearchResult from "./pre-owned-search-result";
import Sorter from "./sorter";

export default function PreOwnedOptions() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl tracking-wide">Pre-Owned</h4>
        <Sorter />
      </div>
      {preOwnedSearchResults.map((result: PreOwnedSearchResultPropTypes, idx: number) => (
        <PreOwnedSearchResult
          key={`${result}-${idx}`}
          brandLogoPath={result.brandLogoPath}
          authScore={result.authScore}
          hits={result.hits}
          priceLow={result.priceLow}
          priceHigh={result.priceHigh}
          layawayLogoPath={result.layawayLogoPath}
        />
      ))}
      <MoreButton />
    </div>
  );
}
