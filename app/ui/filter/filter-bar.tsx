import filterData from "../../lib/data/filter-data.json";
import FilterDropdown from "./filter-dropdown";

export default function FilterBar() {
  return (
    <div className="flex gap-1 overflow-x-scroll no-scrollbar">
      {filterData.map((fd: any, idx: number) => (
        <FilterDropdown key={`${fd}-${idx}`} name={fd.name} options={fd.options} />
      ))}
    </div>
  );
}
