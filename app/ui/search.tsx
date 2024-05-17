import Image from "next/image";
import SearchFiltersDropdown from "./filter-sort/search-filters-dropdown";

export default function Search() {
  return (
    <form>
      <div className="outline outline-gray rounded-md px-4 pt-2 pb-4 bg-white">
        <div className="flex items-center">
          <Image src="/icons/search.svg" width={24} height={24} alt="Magnifying glass icon" />
          <input
            type="text"
            name="search"
            id="search-bar"
            placeholder="Browse..."
            className="outline-none rounded-sm p-1 pl-2 border-b border-primary w-full "
          />
        </div>
      </div>
      <SearchFiltersDropdown />
    </form>
  );
}
