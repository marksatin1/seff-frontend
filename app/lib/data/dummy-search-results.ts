import { ExtraSavingsType, NewSearchResultType } from "../definitions";

export const newSearchResults: NewSearchResultType[] = [
  {
    sellerLogo: {
      path: "/logos/chrono.svg",
      width: 90,
      height: 47,
      description: "Chrono24 logo",
    },
    authScore: 55,
    price: 3500,
    financierLogo: {
      path: "/logos/klarna.svg",
      width: 68,
      height: 36,
      description: "Klarna logo",
    },
  },
  {
    sellerLogo: {
      path: "/logos/neiman.svg",
      width: 90,
      height: 35,
      description: "Neiman Marcus logo",
    },
    authScore: 100,
    price: 3500,
    financierLogo: {
      path: "/logos/paypal.svg",
      width: 63,
      height: 22,
      description: "PayPal Credit logo",
    },
  },
  {
    sellerLogo: {
      path: "/logos/bergdorf.svg",
      width: 90,
      height: 34,
      description: "Bergdorf Goodman logo",
    },
    authScore: 100,
    price: 4500,
    financierLogo: {
      path: "/logos/afterpay.svg",
      width: 63,
      height: 22,
      description: "Afterpay logo",
    },
  },
  {
    sellerLogo: {
      path: "/logos/harrods.svg",
      width: 90,
      height: 40,
      description: "Harrod's logo",
    },
    authScore: 68,
    price: 10000,
  },
];

export const extraSavings: ExtraSavingsType = {
  discount: "10%",
  savingsLogos: [
    {
      path: "/logos/rakuten.svg",
      width: 96,
      height: 96,
      description: "Rakuten logo icon",
    },
    {
      path: "/logos/honey.svg",
      width: 96,
      height: 96,
      description: "Honey logo icon",
    },
    {
      path: "/logos/checkmate.svg",
      width: 320,
      height: 96,
      description: "Checkmate logo icon",
    },
  ],
};

export const preOwnedSearchResults = [
  {
    sellerLogo: {
      path: "/logos/ebay.svg",
      width: 90,
      height: 36,
      description: "Ebay logo",
    },
    authScore: 55,
    hits: "5 hits",
    financierLogo: {
      path: "/logos/paypal.svg",
      width: 63,
      height: 22,
      description: "PayPal logo",
    },
    priceLow: 3500,
    priceHigh: 15000,
  },
  {
    sellerLogo: {
      path: "/logos/therealreal.svg",
      width: 90,
      height: 50,
      description: "The Real Real logo",
    },
    authScore: 100,
    hits: "3 hits",
    financierLogo: {
      path: "/logos/klarna.svg",
      width: 68,
      height: 36,
      description: "Klarna logo",
    },
    priceLow: 4000,
    priceHigh: 15000,
  },
  {
    sellerLogo: {
      path: "/logos/fbmarketplace.svg",
      width: 90,
      height: 29,
      description: "Facebook Marketplace logo",
    },
    authScore: 0,
    hits: "3 hits (locally)",
    layawayLogoPath: "",
    priceLow: 6000,
    priceHigh: 15000,
  },
];
