import { useState } from "react";
import "../App.css";

function Instructions() {
  return (
    <>
      <div className="instructions-container">
        <h2>Instructions:</h2>
        <ul>
          <li>1. Please fill out all required form inputs</li>
          <li>
            2. Please double check all information and ensure it is accurate
          </li>
        </ul>
      </div>
    </>
  );
}

export default Instructions;
