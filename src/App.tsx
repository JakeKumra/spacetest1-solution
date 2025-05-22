import { useState, type CSSProperties } from "react";
import "./App.css";

import Controls from "./components/Controls";
import Header from "./components/Header";
import SweetList from "./components/SweetsList";

import { data as sweets } from "./Test1";
import {
  filterBySearchValue,
  getDisplayedSweets,
  sortByPriceAsc,
} from "./utils/helper-functionts";

export type Sweet = {
  name: string;
  price: number;
};

export const ItemsToShow = {
  All: "showAllItems",
  CheapestFive: "showCheapestFive",
} as const;

export type ItemsToShowType = (typeof ItemsToShow)[keyof typeof ItemsToShow];

const appContainerStyle: CSSProperties = {
  fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
  textAlign: "center",
  background: "linear-gradient(to bottom right, #f0f9ff, #e0f7fa)",
  minHeight: "100vh",
  width: "100vw",
  padding: "3rem 1rem",
  color: "#2c3e50",
  boxSizing: "border-box",
};

function App() {
  const [itemsToShow, setItemsToShow] = useState<ItemsToShowType>(
    ItemsToShow.All
  );
  const [searchValue, setSearchValue] = useState("");

  const sortedSweets = sortByPriceAsc(sweets);
  const filteredSweets = filterBySearchValue(sortedSweets, searchValue);
  const isShowingAll = itemsToShow === ItemsToShow.All;
  const displayedSweets = getDisplayedSweets(filteredSweets, isShowingAll);

  return (
    <div style={appContainerStyle}>
      <Header isShowingAll={isShowingAll} />
      <Controls
        isShowingAll={isShowingAll}
        setItemsToShow={setItemsToShow}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <SweetList sweets={displayedSweets} />
    </div>
  );
}

export default App;
