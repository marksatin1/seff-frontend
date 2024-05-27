import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function RevealMoreCaret({
  revealMore,
  setRevealMore,
}: {
  revealMore: boolean;
  setRevealMore: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Image
      src={revealMore ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
      width={24}
      height={24}
      alt="Chevron pointing down indicating more options"
      onClick={() => setRevealMore(!revealMore)}
    />
  );
}
