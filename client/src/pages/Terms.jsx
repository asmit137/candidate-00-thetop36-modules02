import React from "react";

function Terms() {
  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-blue-700">Terms & Raffle Rules</h2>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>Participants must be 18 years or older.</li>
    <li>Raffle entry is automatic with bundle purchase.</li>
    <li>One winner is selected per prize.</li>
    <li>Opt-out allowed only after 45 days via secure link.</li>
  </ul>
</div>

  );
}

export default Terms;
