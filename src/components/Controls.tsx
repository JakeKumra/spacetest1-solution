import type { CSSProperties } from "react";
import { ItemsToShow, type ItemsToShowType } from "../App";

type ControlsProps = {
  isShowingAll: boolean;
  setItemsToShow: (val: ItemsToShowType) => void;
  searchValue: string;
  setSearchValue: (val: string) => void;
};

const Controls = ({
  isShowingAll,
  setItemsToShow,
  searchValue,
  setSearchValue,
}: ControlsProps) => {
  const controlsContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const toggleButtonStyle: CSSProperties = {
    backgroundColor: "#4db6ac",
    color: "#2c3e50",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    padding: "0.75rem 1.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "350px",
    maxWidth: "90%",
  };

  const searchInputStyle: CSSProperties = {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    border: "2px solid #4db6ac",
    borderRadius: "12px",
    outline: "none",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#e0f7fa",
    color: "#2c3e50",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.05)",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <div style={controlsContainerStyle}>
      <button
        style={toggleButtonStyle}
        onClick={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = "#00897b";
          setTimeout(() => {
            button.style.backgroundColor = "#4db6ac";
          }, 150);
          setItemsToShow(
            isShowingAll ? ItemsToShow.CheapestFive : ItemsToShow.All
          );
        }}
      >
        {isShowingAll ? "🍭 View 5 Cheapest Sweets" : "🍬 View All Sweets"}
      </button>

      <input
        style={searchInputStyle}
        placeholder="What are you looking for?"
        value={searchValue}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#00897b";
          e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 137, 123, 0.4)";
          e.currentTarget.style.backgroundColor = "#fff";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#4db6ac";
          e.currentTarget.style.boxShadow = "0 0 8px rgba(0, 0, 0, 0.05)";
          e.currentTarget.style.backgroundColor = "#e0f7fa";
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Controls;
