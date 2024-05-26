import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function FilterButton({
  showFilters,
  setShowFilters,
}: {
  showFilters: boolean;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Image
      src="/icons/filter-sliders.png"
      width={256}
      height={256}
      alt="An icon of three white sliders on a purple background"
      className="rounded-lg w-12 h-12 shadow-lg cursor-pointer"
      role="button"
      onClick={() => setShowFilters(!showFilters)}
    />
  );
}
