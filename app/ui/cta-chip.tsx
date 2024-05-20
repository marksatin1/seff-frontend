import Image from "next/image";

export default function CtaChip() {
  return (
    <div className="w-fit flex items-start gap-2 text-primary bg-primary-light p-3 shadow-sm">
      <Image
        src="/icons/information-circle-contained.svg"
        height={40}
        width={40}
        alt="Star icon representing a sales discount"
      />
      <p className="text-justify">
        We only provide new options if there are discounts.{" "}
        <span className="underline">Sign in</span> to include your credit card offers.
      </p>
    </div>
  );
}
