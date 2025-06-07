import React, { useState, useEffect } from "react";

function PrizePanel() {
  const [form, setForm] = useState({
    title: "",
    retailPrice: "",
    image: "",
    sourceUrl: "",
  });

  const [prizes, setPrizes] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchPrizes = async () => {
    const res = await fetch("https://candidate-00-thetop36-modules02.onrender.com/api/prizes");
    const data = await res.json();
    setPrizes(data);
  };

  const handleSubmit = async () => {
    await fetch("https://candidate-00-thetop36-modules02.onrender.com/api/prizes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({
      title: "",
      retailPrice: "",
      image: "",
      sourceUrl: "",
    });
    fetchPrizes();
  };

  const createRaffle = async (prizeId) => {
    await fetch("https://candidate-00-thetop36-modules02.onrender.com/api/raffles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prizeId }),
    });
    alert("Raffle Created!");
  };

  const markClaimed = async (prizeId) => {
    await fetch(`https://candidate-00-thetop36-modules02.onrender.com/api/prizes/${prizeId}/claim`, {
      method: "PUT",
    });
    alert("Prize marked as claimed!");
    fetchPrizes();
  };

  useEffect(() => {
    fetchPrizes();
  }, []);

  return (
    <div className="space-y-8 p-6 max-w-6xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Add New Prize</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Prize Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="retailPrice"
            placeholder="Retail Price"
            value={form.retailPrice}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="sourceUrl"
            placeholder="Source URL"
            value={form.sourceUrl}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Save Prize
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div key={prize._id} className="bg-white shadow rounded-lg p-4">
            <img
              src={prize.image}
              alt={prize.title}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{prize.title}</h3>
            <p className="text-sm text-gray-500">Retail: ${prize.retailPrice}</p>
            <p className="text-xs text-gray-400 truncate">
              Source: {prize.sourceUrl}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                onClick={() => createRaffle(prize._id)}
              >
                Create Raffle
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
                onClick={() => markClaimed(prize._id)}
              >
                Mark Claimed
              </button>
            </div>
            {prize.claimed && (
              <div className="mt-1 text-xs text-green-600 font-medium">Claimed</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrizePanel;
