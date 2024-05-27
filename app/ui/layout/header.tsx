import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3 bg-white">
      <div className="flex justify-between items-center m-auto md:w-3/4 xl:w-1/2">
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
          className="font-light text-sm underline text-gray border border-secondary rounded-xl p-2 shadow-md"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
