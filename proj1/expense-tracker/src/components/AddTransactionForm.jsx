import { useState, useContext } from "react";
import { TransactionContext } from "./TransactionContext";

export default function AddTransactionForm() {
  const { addTransaction } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      alert("Please fill out both fields");
      return;
    }

    const newTransaction = {
      id: crypto.randomUUID(), // unique id
      text,
      amount: parseFloat(amount), // convert string to number
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Transaction</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter description..."
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount (e.g. 100 or -50)"
        className="w-full p-2 border rounded mb-4"
      />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Add Transaction
      </button>
    </form>
  );
}
