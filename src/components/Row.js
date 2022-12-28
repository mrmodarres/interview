import { Button, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cell from "./Cell";

function Row({ rowData, openDetail, setData }) {
  const [cellData, setCellData] = useState([]);

  useEffect(() => {
    const emptyList = [];
    const data = Object.entries(rowData);
    for (let i = 0; data.length > i; i++) {
      emptyList.push(data[i][1]);
    }
    setCellData(emptyList);
  }, [rowData]);
  const openHandler = () => {
    setData(rowData);
    openDetail(true);
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
      className={rowData.status === "single" ? "color_gray" : ""}
    >
      {cellData.length > 0 &&
        cellData.map((el, index) => (
          <Cell key={`cell_${el}_${index}`} cellValue={el} />
        ))}
      <TableCell align="right">
        <Button onClick={openHandler}>Details</Button>
      </TableCell>
    </TableRow>
  );
}

export default Row;
