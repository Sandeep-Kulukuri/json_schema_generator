import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h2>Dynamic Json Schema Generator</h2>
      <div className="form">
        <div className="flex-container">
          <label>Field Name</label>
          <label> Data Type </label>
        </div>
      </div>
      <div>
        <h4> Json Schema Output </h4>
        <div className="schema-output">
          <button className="copy-btn">copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
