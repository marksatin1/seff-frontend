import Image from "next/image";
import { NewSearchResultPropTypes } from "../lib/definitions";
import SponsoredSaleChip from "./sponsored-sale-chip";
import AuthScoreChip from "./auth-score-chip";
import { transformPriceToString } from "../lib/utils";

export default function NewSearchResult({
  brandLogoPath,
  authScore,
  price,
  layawayLogoPath,
}: NewSearchResultPropTypes) {
  return (
    <section className="h-40 rounded bg-white p-2 shadow">
      <div className="h-full flex gap-2">
        <article className="rounded-md border border-neutral flex justify-center items-center px-1">
          <Image src={brandLogoPath} width={120} height={40} alt="Company brand logo" />
        </article>
        <div className="flex flex-col justify-between">
          <article className="w-full flex jutify-between items-start">
            <div className="flex flex-col gap-1">
              <SponsoredSaleChip />
              <AuthScoreChip authScore={authScore} />
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L13.0008 14.58L18 10"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </article>
          <p className="text-[10px] text-neutral-dark">
            Friends and Family annual sale happening now
          </p>
          <div className="w-full flex justify-between items-center">
            {layawayLogoPath !== "" ? (
              <Image src={layawayLogoPath} width={80} height={36} alt="Layaway brand logo" />
            ) : (
              <div className="w-[80px] h-[36px]"></div>
            )}
            <p className="text-2xl">${transformPriceToString(price)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
