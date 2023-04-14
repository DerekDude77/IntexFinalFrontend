import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const MyBody = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
  minHeight: "100vh",
  display: "flex",
  overflowX: "auto",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export default MyBody;
