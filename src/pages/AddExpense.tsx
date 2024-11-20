import React, { useState } from 'react';

const AddExpense: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    const newExpense = { description, amount, date: new Date().toISOString() };
    localStorage.setItem('expenses', JSON.stringify([...expenses, newExpense]));
    alert('Expense added!');
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Expense</h1>
      <input
        type="text"
        placeholder="Description"
        className="w-full p-2 border rounded mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 border rounded mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Expense
      </button>
    </div>
  );
};

export default AddExpense;
