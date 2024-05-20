import CtaChip from "./cta-chip";
import InfoChip from "./info-chip";
import NewSearchResult from "./new-search-result";
import { newSearchResults } from "../lib/data/dummy-search-results";
import { NewSearchResultPropTypes } from "../lib/definitions";
import Sorter from "./sorter";
import MoreButton from "./more-button";

export default function NewOptions() {
  return (
    <div className="flex flex-col gap-2">
      <CtaChip />
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="text-4xl tracking-wide">New Options</h3>
          <Sorter />
        </div>
        <InfoChip message="Rank based on price and sales stack" />
        <InfoChip message="Prices include required taxes and fees" />
      </div>
      <div className="flex flex-col gap-4">
        {newSearchResults.map((result: NewSearchResultPropTypes, idx: number) => (
          <NewSearchResult
            key={`${result}-${idx}`}
            brandLogoPath={result.brandLogoPath}
            authScore={result.authScore}
            price={result.price}
            layawayLogoPath={result.layawayLogoPath}
          />
        ))}
      </div>
      <MoreButton />
    </div>
  );
}
