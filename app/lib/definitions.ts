export type ImageType = {
  path: string;
  width: number;
  height: number;
  description: string;
};

export type Filter = {
  name: string;
  options: string[];
};

export type MetricButtonType = {
  iconPath: string;
  name: string;
  href: string;
};

export type NewSearchResultType = {
  sellerLogo: ImageType;
  authScore: number;
  price: number;
  offer?: string;
  promotion?: string;
  financierLogo?: ImageType;
};

export type PreOwnedSearchResultType = {
  sellerLogo: ImageType;
  authScore: number;
  hits: string;
  priceLow: number;
  priceHigh: number;
  financierLogo?: ImageType;
};

export type ExtraSavingsType = {
  discount: string;
  savingsLogos: ImageType[];
};
