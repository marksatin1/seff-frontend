"use client";

import Image from "next/image";
import { NewSearchResultType } from "../../lib/definitions";
import SponsoredSaleChip from "../chips/sponsored-sale-chip";
import AuthScoreChip from "../chips/auth-score-chip";
import { transformPriceToString } from "../../lib/utils";
import RevealMoreCaret from "./reveal-more-caret";
import { useState } from "react";
import ExtraSavingsBar from "./extra-savings-bar";
import { extraSavings } from "@/app/lib/data/dummy-search-results";

export default function NewSearchResult({
  sellerLogo,
  authScore,
  price,
  financierLogo,
}: NewSearchResultType) {
  const [revealMore, setRevealMore] = useState<boolean>(false);

  return (
    <article className="rounded bg-white p-2 shadow">
      <div className="flex gap-2">
        <section className="flex justify-center items-center border border-paper rounded-sm px-2">
          <Image
            src={sellerLogo.path}
            width={sellerLogo.width}
            height={sellerLogo.height}
            alt={sellerLogo.description}
            className="w-32"
          />
        </section>
        <section className="grow flex flex-col justify-between gap-3">
          <article className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <SponsoredSaleChip />
              <AuthScoreChip authScore={authScore} />
            </div>
            <RevealMoreCaret revealMore={revealMore} setRevealMore={setRevealMore} />
          </article>
          <p className="text-xs text-paper-dark">Friends and Family annual sale happening now</p>
          <article className="w-full flex justify-between items-center">
            {financierLogo ? (
              <Image
                src={financierLogo.path}
                width={financierLogo.width}
                height={financierLogo.height}
                alt={financierLogo.description}
              />
            ) : (
              <div className="w-[80px] h-[36px]" />
            )}
            <p className="text-2xl">${transformPriceToString(price)}</p>
          </article>
        </section>
      </div>
      {revealMore && <ExtraSavingsBar data={extraSavings} />}
    </article>
  );
}
