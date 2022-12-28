import { TableCell } from "@mui/material";
import React from "react";

function Cell({ cellValue }) {
  return <TableCell align="right">{cellValue}</TableCell>;
}

export default Cell;
