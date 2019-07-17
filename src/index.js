import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "./sidebar";
import Content from "./content";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
