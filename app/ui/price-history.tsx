import { Slider } from "@mui/material";
import Dropdown from "./filter-sort/dropdown";

export default function PriceHistory() {
  return (
    <section className="flex flex-col gap-2 bg-primary-light p-4">
      <article>
        <p className="text-xs text-primary">
          The cheapest time to buy is usually in the winter &#40;Novemeber to February&#41;
        </p>
      </article>
      <hr />
      <article className="flex gap-6 items-center text-xs">
        <div>
          <p>Prices are currently high</p>
          <Slider />
        </div>
        <Dropdown name="View Price History" options={["Option 1", "Option 2", "Option 3"]} />
      </article>
    </section>
  );
}
