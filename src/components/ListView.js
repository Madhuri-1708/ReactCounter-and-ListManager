import React, { useState } from "react";

export default function ListView({ items = [], onClear }) {

  const [isAscending, setIsAscending] = useState(true);

  // Sorting the numbers based on the current order
  const sortedItems = [...items].sort((a, b) =>
    isAscending ? a - b : b - a
  );

  // to Find smallest and largest numbers 
  const smallest = items.length > 0 ? Math.min(...items) : null;
  const largest = items.length > 0 ? Math.max(...items) : null;

  return (
    <div className="mt-6">
      {}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setIsAscending(prev => !prev)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Sort: {isAscending ? "Ascending ↑" : "Descending ↓"}
        </button>
        <button
          onClick={onClear}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset List
        </button>
      </div>

      {}
      <ul className="flex flex-wrap gap-2">
        {sortedItems.map(num => {
          let color = "bg-gray-700";
          if (num === largest) color = "bg-green-500";
          if (num === smallest) color = "bg-red-500";

          return (
            <li
              key={num}
              className={`px-4 py-2 rounded text-white ${color}`}
            >
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
