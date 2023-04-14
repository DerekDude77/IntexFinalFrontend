import React, { useState } from "react";
import teams from "../Data.json";
import MyBody from "../Components/MyBody";
import MyTable from "../Components/Table";
import { Box } from "@mui/material";

const DataTable: React.FC = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <MyTable />
    </div>
  );
};

export default DataTable;
