import React, { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../context/GlobalContext";
export default function Transaction() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transactionMain">
      <h3>History</h3>
      <ul className="list" id="list">
        {transactions.map((item, i) => (
          <>
            <li
              className={item.amount < 0 ? "minus minusex" : "plusex minus"}
              key={i}
            >
              <div className="minusflex">
                {item.text}
                <span>
                  {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
                </span>
              </div>

              <button className="delete-btn">x</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
