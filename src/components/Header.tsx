type HeaderProps = {
  isShowingAll: boolean;
};

const headerStyles = {
  mainTitle: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
    textShadow: "2px 2px #d4e157",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: "#d2691e",
  },
};

const Header = ({ isShowingAll }: HeaderProps) => {
  return (
    <>
      <h1 style={headerStyles.mainTitle}>🍬 Welcome to the Sweet Shop</h1>
      <h2 style={headerStyles.subtitle}>
        {isShowingAll ? "All Available Sweets" : "Top 5 Cheapest Treats"}
      </h2>
    </>
  );
};

export default Header;
