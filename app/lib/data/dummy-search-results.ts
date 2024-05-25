import { NewSearchResultPropTypes } from "../definitions";

export const newSearchResults: NewSearchResultPropTypes[] = [
  {
    brandLogoPath: "/logos/chrono.svg",
    authScore: 55,
    price: 3500,
    layawayLogoPath: "/logos/klarna.svg",
  },
  {
    brandLogoPath: "/logos/neiman.svg",
    authScore: 100,
    price: 3500,
    layawayLogoPath: "/logos/paypal.svg",
  },
  {
    brandLogoPath: "/logos/bergdorf.svg",
    authScore: 100,
    price: 4500,
    layawayLogoPath: "/logos/afterpay.svg",
  },
  {
    brandLogoPath: "/logos/harrods.svg",
    authScore: 68,
    price: 10000,
    layawayLogoPath: "",
  },
];

export const preOwnedSearchResults = [
  {
    brandLogoPath: "/logos/ebay.svg",
    authScore: 55,
    hits: "5 hits",
    layawayLogoPath: "/logos/paypal.svg",
    priceLow: 3500,
    priceHigh: 15000,
  },
  {
    brandLogoPath: "/logos/therealreal.svg",
    authScore: 100,
    hits: "3 hits",
    layawayLogoPath: "/logos/klarna.svg",
    priceLow: 4000,
    priceHigh: 15000,
  },
  {
    brandLogoPath: "/logos/fbmarketplace.svg",
    authScore: 0,
    hits: "3 hits (locally)",
    layawayLogoPath: "",
    priceLow: 6000,
    priceHigh: 15000,
  },
];
