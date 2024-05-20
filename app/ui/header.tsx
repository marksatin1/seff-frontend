import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 mb-2 bg-white">
      <Link href="/">
        <Image
          src="/icons/seff-primary.svg"
          width={249}
          height={167}
          alt="SEFF logo in a light purple color"
          priority
          className="w-24 h-auto"
        />
      </Link>
      <button
        type="button"
        className="font-light text-sm underline text-gray border border-secondary rounded-lg p-2 shadow-md"
      >
        Sign In
      </button>
    </header>
  );
}
