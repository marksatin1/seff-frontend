import FilterSortDropdown from "./filter-sort-dropdown";
import { transformJSONtoJS } from "@/app/lib/utils";
import filterJSON from "../../lib/data/filter-data.json";

const filterData = transformJSONtoJS(filterJSON);
console.log(filterData);

export default function FilterBar() {
  return (
    <section className="flex gap-2 overflow-x-scroll">
      <FilterSortDropdown type="filter" name="offers-filter" options={filterData.offers} />
      <FilterSortDropdown type="filter" name="category-filter" options={filterData.category} />
      <FilterSortDropdown type="filter" name="size-filter" options={filterData.size} />
      <FilterSortDropdown type="filter" name="price-filter" options={filterData.price} />
      <FilterSortDropdown type="filter" name="department-filter" options={filterData.department} />
      <FilterSortDropdown type="filter" name="color-filter" options={filterData.color} />
      <FilterSortDropdown type="filter" name="fabric-filter" options={filterData.fabric} />
    </section>
  );
}
