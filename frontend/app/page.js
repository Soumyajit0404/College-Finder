"use client";

import { useEffect, useState } from "react";
import API from "../services/api";
import CollegeCard from "../components/CollegeCard";

export default function Home() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [minFees, setMinFees] = useState("");
  const [maxFees, setMaxFees] = useState("");

  useEffect(() => {
    fetchColleges();
  }, [search, location, minFees, maxFees]);

  const fetchColleges = async () => {
    try {
      const res = await API.get("/api/colleges", {
        params: {
          search,
          location,
          minFees: minFees || 0,
          maxFees: maxFees || 10000000,
        },
      });
      setColleges(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        🎓 College Finder
      </h1>

      {/* 🔍 SEARCH + FILTERS */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">

        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-lg"
        />

        <input
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 border rounded-lg"
        />

        <input
          placeholder="Min Fees"
          type="number"
          onChange={(e) => setMinFees(e.target.value)}
          className="p-3 border rounded-lg"
        />

        <input
          placeholder="Max Fees"
          type="number"
          onChange={(e) => setMaxFees(e.target.value)}
          className="p-3 border rounded-lg"
        />
      </div>

      {/* 📦 LIST */}
      {colleges.length === 0 ? (
        <p className="text-center text-gray-500">
          No colleges found
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.id} college={c} />
          ))}
        </div>
      )}
    </div>
  );
}