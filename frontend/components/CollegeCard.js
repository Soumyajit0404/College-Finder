"use client";

import { useState } from "react";

export default function CollegeCard({ college }) {
  const [added, setAdded] = useState(false);

  const handleCompare = () => {
    let selected = JSON.parse(localStorage.getItem("compare")) || [];

    const exists = selected.find((c) => c.id === college.id);
    if (exists) {
      alert("Already added");
      return;
    }

    if (selected.length >= 3) {
      alert("Max 3 colleges");
      return;
    }

    selected.push(college);
    localStorage.setItem("compare", JSON.stringify(selected));
    setAdded(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 border">
      
      <h2 className="text-xl font-semibold mb-2">
        {college.name}
      </h2>

      <p className="text-gray-600 text-sm mb-2">
        📍 {college.location}
      </p>

      <div className="flex justify-between text-sm mb-3">
        <span>💰 ₹{college.fees}</span>
        <span>⭐ {college.rating}</span>
      </div>

      <p className="text-sm text-gray-700 mb-4">
        Placement: {college.placement_percentage}%
      </p>

      <button
        onClick={handleCompare}
        className={`w-full py-2 rounded-xl text-white font-medium transition ${
          added
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {added ? "Added" : "Add to Compare"}
      </button>
    </div>
  );
}