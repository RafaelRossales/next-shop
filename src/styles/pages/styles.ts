import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  padding: "2rem 0",

  display: "flex",
  justifyContent: "space-between",

  ".cart-btn": {
    backgroundColor: "$gray800",
    border: 0,
    padding: "1.1rem",
    borderRadius: 8,
    cursor: "pointer",
  },

  span: {
    backgroundColor: "$green300",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    border: "4px solid $gray900",
    color: "white",
    position: "absolute",
    marginLeft: "2.5rem",
    top: 25,
  },
});
