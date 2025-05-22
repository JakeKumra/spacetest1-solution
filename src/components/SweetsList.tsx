import type { CSSProperties } from "react";

type SweetListProps = {
  sweets: { name: string; price: number }[];
};

const sweetListStyle: CSSProperties = {
  listStyleType: "decimal",
  paddingLeft: "1.5rem",
  margin: "2rem auto 0",
  maxWidth: "400px",
  textAlign: "left",
  backgroundColor: "#fefefe",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
};

const sweetItemStyle: CSSProperties = {
  marginBottom: "0.75rem",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.1rem",
};

const sweetNameStyle: CSSProperties = {
  fontWeight: "bold",
};

const sweetPriceStyle: CSSProperties = {
  color: "#00796b",
};

const noResultsStyle: CSSProperties = {
  marginTop: "2rem",
  fontStyle: "italic",
  color: "#607d8b",
};

const SweetList = ({ sweets }: SweetListProps) => {
  if (sweets.length === 0) {
    return <p style={noResultsStyle}>No matches! Try a different name.</p>;
  }

  return (
    <ol style={sweetListStyle}>
      {sweets.map((sweet) => (
        <li key={sweet.name} style={sweetItemStyle}>
          <span style={sweetNameStyle}>{sweet.name}</span>
          <span style={sweetPriceStyle}>£{sweet.price.toFixed(2)}</span>
        </li>
      ))}
    </ol>
  );
};

export default SweetList;
