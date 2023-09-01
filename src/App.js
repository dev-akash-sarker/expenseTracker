import "./App.css";
import AddTransaction from "./components/addTransaction";
import Balace from "./components/balance";
import Header from "./components/header";
import IncomeExpense from "./components/incomeexpense";
import Transaction from "./components/transaction";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="expensemain">
          <Header />
          <Balace />
          <IncomeExpense />
          <Transaction />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
