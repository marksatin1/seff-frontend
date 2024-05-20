import Image from "next/image";

export default function SponsoredSaleChip() {
  return (
    <div className="w-fit flex gap-1 rounded-full text-primary bg-primary-light px-2 py-1">
      <Image
        src="/icons/discount-star.svg"
        height={12}
        width={12}
        alt="Star icon representing a sales discount"
      />
      <p className="text-xs text-nowrap">Sponsored Sale</p>
    </div>
  );
}
