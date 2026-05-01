"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("compare")) || [];
    setColleges(data);
  }, []);

  const removeCollege = (id) => {
    const updated = colleges.filter((c) => c.id !== id);
    setColleges(updated);
    localStorage.setItem("compare", JSON.stringify(updated));
  };

  const clearAll = () => {
    localStorage.removeItem("compare");
    setColleges([]);
  };

  if (colleges.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold">No colleges selected</h2>
        <p className="text-gray-500">Add from homepage</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Compare Colleges
      </h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={clearAll}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Field</th>
              {colleges.map((c) => (
                <th key={c.id} className="p-3">
                  {c.name}
                  <br />
                  <button
                    onClick={() => removeCollege(c.id)}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 font-semibold">Location</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-3">{c.location}</td>
              ))}
            </tr>

            <tr>
              <td className="p-3 font-semibold">Fees</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-3">₹{c.fees}</td>
              ))}
            </tr>

            <tr>
              <td className="p-3 font-semibold">Rating</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-3">⭐ {c.rating}</td>
              ))}
            </tr>

            <tr>
              <td className="p-3 font-semibold">Placement</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-3">
                  {c.placement_percentage}%
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}