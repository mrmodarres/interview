import React from "react";
import "./App.css";
import Table from "./components/Table";
import mockDataLabel from "./func/mockDataLabel";
function App() {
  const tableData = mockDataLabel(4, 2, 3);
  return (
    <div className="App">
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Table tableData={tableData} />
      </div>
    </div>
  );
}

export default App;
