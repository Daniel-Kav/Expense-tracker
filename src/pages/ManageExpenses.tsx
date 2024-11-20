import React, { useState } from 'react';

const ManageExpenses: React.FC = () => {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses') || '[]')
  );

  const handleDelete = (index: number) => {
    const updatedExpenses = expenses.filter((_: any, i: number) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Expenses</h1>
      <ul>
        {expenses.map((expense: any, index: number) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <span>{expense.description} - ${expense.amount}</span>
            <button
              onClick={() => handleDelete(index)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageExpenses;
