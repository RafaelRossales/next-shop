import { styled } from "@stitches/react";

export const ItemContainer = styled("div", {
  display: "flex",
  //flexDirection:'column',
  //alignItems: "center",
  //justifyContent: "space-between",
  //   padding: "16px",
  //   backgroundColor: "red",
  borderRadius: "8px",
  // marginBottom: "16px",
  gap: "20px",
});

export const ItemImage = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",
  width: "102px",
  height: "93px",

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
  justifyContent: "space-around",
});

export const ItemDetails = styled("div", {
  //   backgroundColor: "Blue",
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

export const ItemActions = styled("div", {
  width: "100%",
  height: "auto",
  //   backgroundColor: "red",
  color:'Green'
});
