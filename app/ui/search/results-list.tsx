import { NewSearchResultType } from "@/app/lib/definitions";
import { newSearchResults } from "@/app/lib/data/dummy-search-results";
import { filterResultsList } from "@/app/lib/utils";

export default function ResultsList({ query }: { query: string }) {
  const filteredResults = filterResultsList(newSearchResults, query);

  return (
    <div className="border-2 border-primary-dark w-full h-full flex flex-col gap-4 mt-3 p-6 rounded-b-md shadow-lg">
      {filteredResults?.map((res: NewSearchResultType, idx: number) => {
        return (
          <div key={`${res}-${idx}`}>
            <p>{res.sellerLogo.path}</p>
          </div>
        );
      })}
    </div>
  );
}
