"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ border: "1px solid black", padding: "8px" }}
      />
    </div>
  );
}