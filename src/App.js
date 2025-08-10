import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";

function App() {
  // Load numbers from localStorage when the app starts
  const [numbers, setNumbers] = useState(() => {
    try {
      const savedList = localStorage.getItem("raiqa_list");
      return savedList ? JSON.parse(savedList) : [];
    } catch (error) {
      console.error("Error loading saved list:", error);
      return [];
    }
  });

  // Save numbers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("raiqa_list", JSON.stringify(numbers));
  }, [numbers]);

  const addNumber = (num) => {
    setNumbers((prevNumbers) =>
      prevNumbers.includes(num) ? prevNumbers : [...prevNumbers, num]
    );
  };

  // to Clear the entire list
  const clearList = () => {
    setNumbers([]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="mx-auto max-w-lg bg-white rounded-xl shadow p-6">
        {}
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Raiqa Health — Counter & List
        </h1>

        {}
        <Counter onAddItem={addNumber} />

        {}
        <p className="text-center mt-4 text-lg">
          Total Numbers: <span className="font-medium">{numbers.length}</span>
        </p>

        {}
        <ListView items={numbers} onClear={clearList} />
      </div>
    </div>
  );
}

export default App;
