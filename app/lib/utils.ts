import { NewSearchResultType } from "./definitions";

// what are types for these params?
export function transformJSONtoJS(json: any[]) {
  return json.reduce((acc: any, item: any) => {
    acc[item.name] = item.options;
    return acc;
  }, []);
}

export function transformPriceToString(price: number) {
  const newPrice = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return newPrice;
}

export function transformPriceRangetoString(priceLow: number, priceHigh: number) {
  const newLow = priceLow / 1000;
  const newHigh = priceHigh / 1000;

  return `${newLow}k - ${newHigh}k`;
}

export function filterResultsList(searchResults: NewSearchResultType[], query: string) {
  if (Array.isArray(searchResults)) {
    return searchResults.filter((res: NewSearchResultType) => {
      return res.sellerLogo.path.toLowerCase().includes(query.toLowerCase());
    });
  } else {
    return [];
  }
}
