import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./style.css";
export default function Balace() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="balance-top">
      <h4>Your balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}
