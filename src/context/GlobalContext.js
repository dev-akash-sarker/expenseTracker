// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transaction: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  // Add Tracsaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <>
      <GlobalContext.Provider
        value={{
          transactions: state.transaction,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
