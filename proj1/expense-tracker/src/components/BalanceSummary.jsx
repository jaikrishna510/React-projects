// src/components/BalanceSummary.jsx

import React from "react";

function BalanceSummary({ income = 0, expenses = 0 }) {
  const balance = income - expenses;

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Your Balance</h2>
      <p className="text-2xl font-bold text-green-600">₹{balance}</p>
      <div className="flex justify-around mt-4 text-sm">
        <div>
          <p className="text-gray-500">Income</p>
          <p className="text-green-500">+₹{income}</p>
        </div>
        <div>
          <p className="text-gray-500">Expenses</p>
          <p className="text-red-500">-₹{expenses}</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceSummary;
