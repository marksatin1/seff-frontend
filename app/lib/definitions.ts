import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Filter = {
  name: string;
  options: string[];
};

export type Sort = {
  name: string;
  options: string[];
};

export type NewSearchResultPropTypes = {
  brandLogoPath: string;
  authScore: number;
  price: number;
  offer?: string;
  promotion?: string;
  layawayLogoPath: string;
};

export type PreOwnedSearchResultPropTypes = {
  brandLogoPath: string;
  authScore: number;
  hits: string;
  priceLow: number;
  priceHigh: number;
  layawayLogoPath: string;
};
