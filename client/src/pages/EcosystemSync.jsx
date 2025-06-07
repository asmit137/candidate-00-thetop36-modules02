import React, { useState } from "react";

function EcosystemSync() {
  const [email, setEmail] = useState("");

  const enrollUser = async () => {
    const payload = {
      email,
      source: "thetop36",
      enrolledOn: new Date().toISOString().split("T")[0],
    };

    const platforms = [
      "EcoWorldBuy.com",
      "LanguageKonnect.com",
      "TalentKonnect.com"
    ];

    for (let platform of platforms) {
      await fetch("https://candidate-00-thetop36-modules02.onrender.com/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    alert("User enrolled in all 3 platforms!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Enroll User into Ecosystem</h2>
      <input
        type="email"
        placeholder="Enter user email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <button
        onClick={enrollUser}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Enroll in 3 Platforms
      </button>
    </div>

  );
}

export default EcosystemSync;
