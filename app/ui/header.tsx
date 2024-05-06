import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-white">
      <Image
        src="/icons/seff-primary.svg"
        width={249}
        height={167}
        alt="SEFF logo in a light purple color"
        priority
        className="w-24 h-auto"
      />
      <button
        type="button"
        className="font-light text-sm underline text-gray border border-secondary rounded-lg p-2 shadow-md"
      >
        Sign In
      </button>
    </header>
  );
}
