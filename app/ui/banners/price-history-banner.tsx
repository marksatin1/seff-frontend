import Image from "next/image";
import MetricButton from "../metrics/metric-button";

export default function PriceHistoryBanner() {
  return (
    <section className="flex flex-col gap-2 bg-primary-light p-4">
      <article>
        <p className="text-sm text-primary">
          The cheapest time to buy is usually in the winter &#40;November to February&#41;
        </p>
      </article>
      <hr />
      <article className="flex gap-6 items-center text-sm">
        <div>
          <Image
            src="/icons/price-slider.png"
            width={152}
            height={34}
            alt="Slider showing current price in relation to prices for past 30 days"
          />
        </div>
        <button
          type="button"
          className="border-2 text-secondary border-secondary rounded-md p-3 shadow"
        >
          View Price History
        </button>
      </article>
    </section>
  );
}
