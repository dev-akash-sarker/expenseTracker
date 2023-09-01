import React from "react";
import "./style.css";
export default function IncomeExpense() {
  return (
    <div className="incomeExpense">
      <div className="income">
        <h6>income</h6>
        <h4>$500.00</h4>
      </div>
      <div className="line"></div>
      <div className="expense">
        <h6>expense</h6>
        <h4>$240.00</h4>
      </div>
    </div>
  );
}
