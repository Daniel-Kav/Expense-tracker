import React from 'react';

const ExpenseReport: React.FC = () => {
  const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  const total = expenses.reduce((sum: number, expense: any) => sum + Number(expense.amount), 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Expense Report</h1>
      <p className="text-lg">Total Expenses: ${total.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseReport;
