import MetricBar from "./MetricBar";
import TrackPricesMetricBar from "./track-prices-metric-bar";

export default function Metrics() {
  return (
    <div className="flex flex-col gap-4">
      <TrackPricesMetricBar />
      <div className="flex items-center gap-4">
        <MetricBar iconPath="/icons/calendar.svg" name="Date Grid" href="" />
        <MetricBar iconPath="/icons/price-bar-graph.svg" name="Price Graph" href="" />
      </div>
    </div>
  );
}
