import React from "react";
import "./App.css";
import Table from "./components/Table";
function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table />
      </div>
    </div>
  );
}

export default App;
