import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Button,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import Table from "./Table";
function Row({ rowData, openDetail, setData, header }) {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setData(rowData);
    openDetail(true);
  };
  console.log(rowData);
  return (
    <>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
        className={rowData.status === "single" ? "color_gray" : ""}
      >
        {header.map((el, index) =>
          el === "subRows" && rowData[el] !== undefined ? (
            <TableCell>
              <IconButton
                aria-label="Expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
              </IconButton>
            </TableCell>
          ) : (
            <Cell key={`cell_${el}_${index}`} cellValue={rowData[el]} />
          )
        )}
        {/* <TableCell align="right">
        <Button onClick={openHandler}>Details</Button>
      </TableCell> */}
      </TableRow>
      <TableRow>
        {header.map(
          (el, index) =>
            el === "subRows" &&
            rowData[el] !== undefined && (
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Table tableData={rowData[el]} />
                  </Box>
                </Collapse>
              </TableCell>
            )
        )}
      </TableRow>
    </>
  );
}

export default Row;
