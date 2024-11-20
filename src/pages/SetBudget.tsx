import React, { useState } from 'react';

const SetBudget: React.FC = () => {
  const [budget, setBudget] = useState(localStorage.getItem('budget') || '');

  const handleSave = () => {
    localStorage.setItem('budget', budget);
    alert('Budget saved!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Set Budget</h1>
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save Budget
      </button>
    </div>
  );
};

export default SetBudget;
