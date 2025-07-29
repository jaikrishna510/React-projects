import { createContext, useEffect, useState } from "react";

// 1. Create the context
export const TransactionContext = createContext();

// 2. Create the provider
export const TransactionProvider = ({ children }) => {
  // Check if there is any data in localStorage
  const [transactions, setTransactions] = useState(() => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : [];
  });

  // 3. Save to localStorage every time transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // 4. Add a transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  // 5. Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // 6. Provide the values to components
  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
