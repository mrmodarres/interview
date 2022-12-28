import React, { useEffect, useState } from "react";
import mockDataLabel from "../func/mockDataLabel";
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
function TableShow() {
  const tableData = mockDataLabel(12);

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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {header.length > 0 &&
                    header.map((el, index) => (
                      <TableCell align="right" key={`header_is_${index}`}>
                        {el}
                      </TableCell>
                    ))}
                  <TableCell align="right">Information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((el, index) => (
                  <Row
                    key={`rows_key_${index}`}
                    rowData={el}
                    openDetail={setOpenDetail}
                    setData={setDataInfo}
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
