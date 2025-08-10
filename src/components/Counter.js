import React, { useState } from "react";

function Counter({ onAddItem }) {
  const [count, setCount] = useState(0);

  // Increases the counter value
  const handleIncrease = () => setCount(prevCount => prevCount + 1);

  // Decreases the counter value but not below 0
  const handleDecrease = () =>
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

  // Add current count to the list and reset the counter
  const handleAdd = () => {
    if (count > 0) {
      onAddItem(count);
      setCount(0); 
    }
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-black text-white">
      {}
      <h2 className="text-4xl font-semibold">{count}</h2>

      {}
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleIncrease}
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          +
        </button>

        <button
          onClick={handleDecrease}
          className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          -
        </button>

        <button
          onClick={handleAdd}
          disabled={count <= 0}
          className={`px-4 py-2 rounded text-white ${
            count > 0
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter;
