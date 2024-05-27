import { ExtraSavingsType, ImageType } from "@/app/lib/definitions";
import Image from "next/image";

export default function ExtraSavingsBar({ data }: { data: ExtraSavingsType }) {
  return (
    <article className="flex justify-between items-center text-sm mt-2">
      <p>Save an extra {data.discount} with</p>
      <div className="flex gap-1">
        {data.savingsLogos.map((logo: ImageType, idx: number) => (
          <Image
            key={`${logo}-${idx}`}
            src={logo.path}
            width={logo.width}
            height={logo.height}
            alt={logo.description}
            className="w-fit h-8"
          />
        ))}
      </div>
    </article>
  );
}
