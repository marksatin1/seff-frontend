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
    <form className="w-full shadow-md">
      <div className="border-2 border-neutral-dark rounded-md px-4 pt-2 pb-4 bg-white">
        <div className="flex items-center">
          <Image src="/icons/search.svg" width={24} height={24} alt="Magnifying glass icon" />
          <input
            type="text"
            name="search"
            id="search-bar"
            placeholder="Browse..."
            defaultValue={searchParams.get("query")?.toString()}
            onChange={(e: any) => handleSearch(e.target.value)}
            className="outline-none rounded-sm p-1 pl-2 border-b border-primary w-full "
          />
        </div>
      </div>
    </form>
  );
}
