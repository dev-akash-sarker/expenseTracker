import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./style.css";
export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="incomeExpense">
      <div className="income">
        <h6>income</h6>
        <h4>${income}</h4>
      </div>
      <div className="line"></div>
      <div className="expense">
        <h6>expense</h6>
        <h4>${expense}</h4>
      </div>
    </div>
  );
}
