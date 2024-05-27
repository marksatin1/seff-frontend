import Image from "next/image";
import { PreOwnedSearchResultType } from "../../lib/definitions";
import SponsoredSaleChip from "../chips/sponsored-sale-chip";
import AuthScoreChip from "../chips/auth-score-chip";
import { transformPriceRangetoString } from "../../lib/utils";

export default function PreOwnedSearchResult({
  sellerLogo,
  authScore,
  hits,
  financierLogo,
  priceLow,
  priceHigh,
}: PreOwnedSearchResultType) {
  return (
    <article className="rounded bg-white p-2 shadow">
      <div className="flex gap-2">
        <section className="flex justify-center items-center border border-paper rounded-sm px-2">
          <Image
            src={sellerLogo.path}
            width={sellerLogo.width}
            height={sellerLogo.height}
            alt={sellerLogo.description}
            className="w-24 h-32"
          />
        </section>
        <section className="grow flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <AuthScoreChip authScore={authScore} />
            <Image
              src="/icons/chevron-down.svg"
              width={26}
              height={24}
              alt="Down caret signalling a dropdown"
            />
          </div>
          <p className="text-xl text-neutral-dark font-light">{hits}</p>
          <article>
            <div className="w-full flex justify-between items-center">
              {financierLogo ? (
                <Image
                  src={financierLogo.path}
                  width={financierLogo.width}
                  height={financierLogo.height}
                  alt={financierLogo.description}
                />
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
    </article>
  );
}
