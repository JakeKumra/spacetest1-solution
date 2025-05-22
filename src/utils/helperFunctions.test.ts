import { describe, expect, it } from "vitest";
import {
  filterBySearchValue,
  getDisplayedSweets,
  sortByPriceAsc,
} from "./helperFunctions";

type Sweet = {
  name: string;
  price: number;
};

const sweetsMock: Sweet[] = [
  { name: "Chocolate", price: 3 },
  { name: "Candy", price: 1 },
  { name: "Toffee", price: 2 },
  { name: "Gummy", price: 5 },
];

describe("sortByPriceAsc", () => {
  it("sorts sweets by ascending price", () => {
    const sorted = sortByPriceAsc(sweetsMock);
    expect(sorted.map((s) => s.price)).toEqual([1, 2, 3, 5]);
  });

  it("does not mutate the original array", () => {
    const original = [...sweetsMock];
    sortByPriceAsc(sweetsMock);
    expect(sweetsMock).toEqual(original);
  });

  it("returns an empty array if input is empty", () => {
    expect(sortByPriceAsc([])).toEqual([]);
  });
});

describe("filterBySearchValue", () => {
  it("returns sweets that match the search string (case-insensitive)", () => {
    const result = filterBySearchValue(sweetsMock, "can");
    expect(result).toEqual([{ name: "Candy", price: 1 }]);
  });

  it("returns all sweets if search string is empty", () => {
    const result = filterBySearchValue(sweetsMock, "");
    expect(result).toEqual(sweetsMock);
  });

  it("returns an empty array if there are no matches", () => {
    const result = filterBySearchValue(sweetsMock, "xyz");
    expect(result).toEqual([]);
  });

  it("handles mixed case input", () => {
    const result = filterBySearchValue(sweetsMock, "GuMmY");
    expect(result).toEqual([{ name: "Gummy", price: 5 }]);
  });
});

describe("getDisplayedSweets", () => {
  it("returns all sweets if isShowingAll is true", () => {
    const result = getDisplayedSweets(sweetsMock, true);
    expect(result).toEqual(sweetsMock);
  });

  it("returns the first 5 sweets if isShowingAll is false and array is longer than 5", () => {
    const longerList = [
      ...sweetsMock,
      { name: "Fudge", price: 4 },
      { name: "Lollipop", price: 6 },
    ];
    const result = getDisplayedSweets(longerList, false);
    expect(result).toEqual(longerList.slice(0, 5));
  });

  it("returns the full array if it has 5 or fewer items and isShowingAll is false", () => {
    const result = getDisplayedSweets(sweetsMock, false);
    expect(result).toEqual(sweetsMock);
  });

  it("returns an empty array if input is empty", () => {
    const result = getDisplayedSweets([], false);
    expect(result).toEqual([]);
  });
});
