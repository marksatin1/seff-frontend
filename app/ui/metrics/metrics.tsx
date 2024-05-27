import MetricButton from "./metric-button";
import TrackPricesBar from "./track-prices-bar";

export default function Metrics() {
  return (
    <section className="flex flex-col gap-4">
      <TrackPricesBar />
      <div className="flex items-center gap-4">
        <MetricButton iconPath="/icons/calendar.svg" name="Date Grid" href="" />
        <MetricButton iconPath="/icons/price-bar-graph.svg" name="Price Graph" href="" />
      </div>
    </section>
  );
}
