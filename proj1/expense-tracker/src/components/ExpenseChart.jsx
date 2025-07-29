import { Pie } from "react-chartjs-2";
import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, a) => acc + a, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "₹",
        data: [income, Math.abs(expense)],
        backgroundColor: ["#4ade80", "#f87171"],
        borderColor: ["#22c55e", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 mt-6 rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center">Spending Chart</h2>
      <Pie data={data} />
    </div>
  );
}
