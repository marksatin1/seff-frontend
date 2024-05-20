import Image from "next/image";

export default function InfoChip({ message }: { message: string }) {
  return (
    <div className="w-fit flex gap-1 text-neutral-dark py-1">
      <p className="text-xs">{message}</p>
      <Image
        src="/icons/information-circle-contained.svg"
        height={12}
        width={12}
        alt="Star icon representing a sales discount"
      />
    </div>
  );
}
