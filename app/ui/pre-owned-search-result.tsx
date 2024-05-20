import Image from "next/image";
import { PreOwnedSearchResultPropTypes } from "../lib/definitions";
import SponsoredSaleChip from "./sponsored-sale-chip";
import AuthScoreChip from "./auth-score-chip";
import { transformPriceRangetoString } from "../lib/utils";

export default function PreOwnedSearchResult({
  brandLogoPath,
  authScore,
  hits,
  layawayLogoPath,
  priceLow,
  priceHigh,
}: PreOwnedSearchResultPropTypes) {
  return (
    <section className="w-full h-40 flex justify-between rounded-lg bg-white p-2 shadow">
      <div className="w-full h-full flex gap-4">
        <article className="w-40 h-full rounded-md border border-neutral flex justify-center items-center">
          <Image src={brandLogoPath} width={96} height={48} alt="Company brand logo" />
        </article>
        <section className="w-full flex flex-col justify-between">
          <article className="w-full flex justify-between items-center">
            <AuthScoreChip authScore={authScore} />
            <Image
              src="/icons/chevron-down.svg"
              width={48}
              height={24}
              alt="Down caret signalling a dropdown"
            />
          </article>
          <article>
            <p className="text-xl text-neutral-dark font-light">{hits}</p>
          </article>
          <article>
            <div className="w-full flex justify-between items-center">
              {layawayLogoPath !== "" ? (
                <Image src={layawayLogoPath} width={80} height={36} alt="Layaway brand logo" />
              ) : (
                <div className="w-[80px] h-[36px]"></div>
              )}
              <p className="text-2xl text-nowrap">
                ${transformPriceRangetoString(priceLow, priceHigh)}
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
