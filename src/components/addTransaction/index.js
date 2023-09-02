import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./style.css";
export default function AddTransaction() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(number),
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
  };
  return (
    <div className="addtrans">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
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
          />
        </div>
        <button type="sumbit" className="formbtn">
          Add transaction
        </button>
      </form>
    </div>
  );
}
