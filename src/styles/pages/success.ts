import { styled } from "..";

export const SuccessContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "656",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    maxWidth: 560,
    marginTop: "2rem",
    lineHeight: 1.4,
    strong: {
      color: "$green300",
    },
  },

  a: {
    marginTop: "5rem",
    display: "block",
    color: "$green500",
    fontSize: "$lg",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "$green300",
    },
  },
});
export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: "145px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem",
  marginTop: "4rem",
  img: {
    objectFit: "cover",
  },
});
