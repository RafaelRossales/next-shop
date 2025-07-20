import { styled } from "@stitches/react";

export const SidePanelContainer = styled("div", {
  backgroundColor: "$gray800",
  position: "fixed",
  top: 0,
  right: 0,
  width: "30rem",
  height: "100%",
  zIndex: 1000,
  padding: "1.25rem",

  boxShadow: "0 0 10px rgba(0, 0, 0, 0.45)",
  display: "flex",
  flexDirection: "column",
});

export const SidePanelHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "3.75rem",
  width: "100%",
});

export const SidePanelContent = styled("div", {
  flex: 1,
  overflowY: "auto",
  padding: "1.25rem",
  color: "$white",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const SidePanelCartProducts = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const SidePanelFooter = styled("div", {
  marginTop: "auto",
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "3.5rem",
  backgroundColor: "$gray850",
});

export const SidePanelFooterDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",

  ".quantity-details-style, .total-cost-style": {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    color: "$gray100",

    span: {
      fontSize: "$md",
    },
  },

  ".total-cost-style span": {
    fontWeight: "bold",
    fontSize: "$lg",
  },

  ".quantity-details-style span": {
    fontWeight: "normal",
  },
});

export const SidePanelFooterActions = styled("div", {
  button: {
    width: "100%",
    backgroundColor: "$green500",
    border: "none",
    borderRadius: 8,
    padding: "1.25rem",
    fontSize: "$md",
    fontWeight: "bold",
    color: "$white",
    cursor: "pointer",
    transition: "background-color 0.2s",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});
