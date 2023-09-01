import React, { useState } from "react";
import "./style.css";
export default function AddTransaction() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div className="addtrans">
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negetive - expense , positive - income)
          </label>
          <br />
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="0"
          />
        </div>
        <button className="formbtn">Add transaction</button>
      </form>
    </div>
  );
}
