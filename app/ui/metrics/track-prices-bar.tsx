import Image from "next/image";
import { Switch } from "@mui/material";

export default function TrackPricesBar() {
  return (
    <article className="flex justify-evenly items-center gap-2 bg-white px-2 py-3 shadow">
      <section className="grow flex items-center gap-2 md:gap-4">
        <Image
          src="/icons/trend-up.svg"
          width={18}
          height={18}
          alt="Line graph vector pointing down and then up"
          className="w-6 h-6"
        />
        <div>
          <p className="font-bolder">Track Prices</p>
          <p className="text-neutral-dark">Item is currently unavailable</p>
        </div>
      </section>
      <section className="flex items-center">
        <Switch color="warning" />
      </section>
    </article>
  );
}
