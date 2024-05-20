import Image from "next/image";
import { Switch } from "@mui/material";

export default function TrackPricesMetricBar() {
  return (
    <div className="flex justify-between bg-white p-3 shadow">
      <div className="flex gap-4">
        <Image src="/icons/trend-up.svg" width={24} height={24} alt="" />
        <div>
          <p className="font-bolder">Track prices</p>
          <p className="text-neutral-dark">Item is currently unavailable</p>
        </div>
      </div>
      <Switch />
    </div>
  );
}
