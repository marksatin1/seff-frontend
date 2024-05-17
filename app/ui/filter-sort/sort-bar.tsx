import FilterSortDropdown from "./filter-sort-dropdown";
import { transformJSONtoJS } from "@/app/lib/utils";
import sortJSON from "../../lib/data/sort-data.json";

const sortData = transformJSONtoJS(sortJSON);
console.log(sortData);

export default function SortBar() {
  return (
    <section className="flex gap-2 overflow-x-scroll">
      <FilterSortDropdown type="sort" name="price-sort" options={sortData.price} />
      <FilterSortDropdown type="sort" name="pick-up-sort" options={sortData.pickup} />
      <FilterSortDropdown type="sort" name="shipping-sort" options={sortData.shipping} />
      <FilterSortDropdown type="sort" name="locality-sort" options={sortData.locality} />
      <FilterSortDropdown type="sort" name="review-sort" options={sortData.reviews} />
    </section>
  );
}
