import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Transaction History</h2>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions yet.</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((txn) => (
            <li
              key={txn.id}
              className={`flex justify-between items-center p-3 border rounded ${
                txn.amount < 0 ? "bg-red-50 border-red-300" : "bg-green-50 border-green-300"
              }`}
            >
              <span>{txn.text}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  ₹{txn.amount.toFixed(2)}
                </span>
                <button
                  onClick={() => deleteTransaction(txn.id)}
                  className="text-red-600 hover:text-red-800 font-bold"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
