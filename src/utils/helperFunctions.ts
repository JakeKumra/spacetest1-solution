import type { Sweet } from "../App";

export const sortByPriceAsc = (sweets: Sweet[]): Sweet[] => {
  return [...sweets].sort((a, b) => a.price - b.price);
};

export const filterBySearchValue = (
  sweets: Sweet[],
  searchValue: string
): Sweet[] => {
  return sweets.filter((sweet) =>
    sweet.name.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const getDisplayedSweets = (
  sweets: Sweet[],
  isShowingAll: boolean
): Sweet[] => {
  return isShowingAll ? sweets : sweets.slice(0, 5);
};
