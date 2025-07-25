import { styled } from "@stitches/react";

export const ListItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const ItemContainer = styled("div", {
  display: "flex",
  borderRadius: "8px",
  gap: "20px",
});

export const ItemImage = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",
  width: "102px",
  height: "110px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: "cover",
  },
});

export const ItemContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ItemDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  h2: {
    fontSize: "1.25rem",
    color: "$gray100",
    fontWeight: "normal",
  },
  span: {
    fontWeight: "bold",
  },
});

export const QuantityControl = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "80px",
  justifyContent: "space-between",
  margin: "4px 2px",
  borderRadius: "16px",
  padding: " 3px 2px",
  backgroundColor: "$gray900",
  p: {
    fontSize: "1.05rem",
    color: "$green300",
  },
  span: {
    cursor: "pointer",
    color: "$green300",
    fontSize: "1.25rem",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const ItemActions = styled("div", {
  width: "100%",
  height: "auto",
  color: "Green",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
