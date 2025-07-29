import BalanceSummary from "./components/BalanceSummary";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Expense Tracker 💰
      </h1>

      <BalanceSummary />
      <ExpenseChart />
      <AddTransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
