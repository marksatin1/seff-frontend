"use client";

import { useState, useReducer } from "react";
import filterData from "../../lib/data/filter-data.json";
import { Filter } from "../../lib/definitions";
import Image from "next/image";

export type SearchFiltersState = {
  openFilters: string[];
};

export type SearchFiltersAction = {
  type: "open" | "close";
  payload: string;
};

function searchFiltersReducer(
  state: SearchFiltersState,
  action: SearchFiltersAction
): SearchFiltersState {
  switch (action.type) {
    case "open":
      if (!state.openFilters.includes(action.payload)) {
        console.log("open now");
        return { openFilters: [...state.openFilters, action.payload] };
      }
    case "close":
      if (state.openFilters.includes(action.payload)) {
        console.log("closed now");
        return { openFilters: state.openFilters.filter(f => f !== action.payload) };
      }
    default:
      return state;
  }
}

export default function SearchFiltersDropdown() {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [filterState, dispatch] = useReducer(searchFiltersReducer, { openFilters: [] });

  return (
    <div className="flex flex-col items-center">
      <h3
        onClick={() => setFiltersOpen(prev => !prev)}
        className="w-fit text-lg font-bold text-primary underline tracking-wide my-2 cursor-pointer"
      >
        Filters
      </h3>
      {filtersOpen && (
        <div className="w-full overflow-y-scroll flex flex-col items-start bg-white text-secondary-light border border-gray rounded-md p-4">
          {filterData.map((f: Filter, i: number) => {
            return (
              <div key={`${f.name}-${i}`}>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "open", payload: f.name })}
                  className="flex justify-between w-full text-lg font-bold"
                >
                  {f.name}
                  {filterState.openFilters.includes(f.name) ? (
                    <Image
                      src="/icons/chevron-down.svg"
                      width={26}
                      height={24}
                      alt="Black down arrow icon"
                    />
                  ) : (
                    <Image
                      src="/icons/chevron-up.svg"
                      width={26}
                      height={24}
                      alt="Black up arrow icon"
                    />
                  )}
                </button>
                {filterState.openFilters.includes(f.name) && (
                  <div className="flex flex-col gap-2 pl-2 my-1">
                    {f.options.map((o: string, i: number) => {
                      return (
                        <div key={`${o}-${i}`} className="flex gap-2 text-gray">
                          <input type="checkbox" name={o} id={o.toLowerCase()} />
                          <label htmlFor={o.toLowerCase()}>{o}</label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
