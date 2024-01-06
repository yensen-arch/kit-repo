"use client"

import React, { useState } from 'react';

const initialChecklist = [
  { id: 1, name: 'Water Bill', checked: false },
  { id: 2, name: 'Premium Bill', checked: false },
  { id: 3, name: 'Electricity Bill', checked: false },
  { id: 4, name: 'Maintenance Bill', checked: false },
];

function Checklist() {
  const [checklist, setChecklist] = useState(initialChecklist);

  const handleChange = (id) => {
    const index = checklist.findIndex((item) => item.id === id);
    const newChecklist = [...checklist];
    newChecklist[index].checked = !newChecklist[index].checked;
    setChecklist(newChecklist);
  };

  return (
    <div className="max-w-auto mx-auto p-4 bg-white shadow-lg rounded-lg">
      <ul className="space-y-2">
        {checklist.map((item) => (
          <li key={item.id} className="flex items-center">
            <input
              id={`checkbox-${item.id}`}
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              checked={item.checked}
              onChange={() => handleChange(item.id)}
            />
            <label
              htmlFor={`checkbox-${item.id}`}
              className="ml-2 text-gray-700"
            >
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
