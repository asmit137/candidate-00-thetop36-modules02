import React, { useState } from "react";

function OptOut() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkEligibility = () => {
    // Simulate delay of 45 days
    const registeredDate = new Date("2025-06-05"); // Change to real enrolledOn
    const now = new Date();
    const diff = Math.floor((now - registeredDate) / (1000 * 60 * 60 * 24));

    if (diff >= 45) {
      setMessage("You are eligible to opt out. A link has been sent to your email.");
    } else {
      setMessage(`You can opt out after ${45 - diff} more days.`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Request Opt-Out</h2>
      <input
        type="email"
        placeholder="Your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <button
        onClick={checkEligibility}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Check Opt-Out Eligibility
      </button>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>

  );
}

export default OptOut;
