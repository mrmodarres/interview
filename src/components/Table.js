import React, { useEffect, useState } from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Row from "./Row";
import ModalDetails from "./ModalDetails";
import "./tableStyle.css";
function TableShow({ tableData }) {
  const [header, setHeader] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    if (tableData.length > 0) {
      const firstData = tableData[0];
      const emptyList = [];
      const data = Object.entries(firstData);
      for (let i = 0; i < data.length; i++) {
        emptyList.push(data[i][0]);
      }
      setHeader(emptyList);
    }
  }, []);

  return (
    <>
      {tableData.length > 0 ? (
        <>
          <TableContainer
            component={Paper}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Table
              sx={{ minWidth: 650, border: " 2px solid blue" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {header.length > 0 &&
                    header.map(
                      (el, index) =>
                        el !== "subRows" && (
                          <TableCell align="right" key={`header_is_${index}`}>
                            {el}
                          </TableCell>
                        )
                    )}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((el, index) => (
                  <Row
                    key={`rows_key__${index}`}
                    rowData={el}
                    openDetail={setOpenDetail}
                    setData={setDataInfo}
                    header={header}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ModalDetails
            openModal={openDetail}
            setOpenModal={setOpenDetail}
            rowDetail={dataInfo}
          />
        </>
      ) : (
        <h1 style={{ color: "#efefef" }}>No Data</h1>
      )}
    </>
  );
}

export default TableShow;
