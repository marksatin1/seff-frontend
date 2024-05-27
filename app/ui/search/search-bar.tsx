"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(searchTerm: string) {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="w-full">
      <div className="border-2 border-paper rounded-md px-4 pt-3 pb-4 bg-white shadow-md">
        <div className="flex items-center gap-1">
          <Image src="/icons/search.svg" width={24} height={24} alt="Magnifying glass icon" />
          <input
            type="text"
            name="search"
            id="search-bar"
            placeholder="Browse..."
            defaultValue={searchParams.get("query")?.toString()}
            onChange={(e: any) => handleSearch(e.target.value)}
            className="outline-none rounded-sm border-b border-primary w-full text-primary"
          />
        </div>
      </div>
    </form>
  );
}
