const express = require("express");
const router = express.Router();

let prizes = [];
let raffles = [];

// GET all prizes
router.get("/prizes", (req, res) => {
  res.json(prizes);
});

// Add a new prize
router.post("/prizes", (req, res) => {
  const { title, retailPrice, image, sourceUrl } = req.body;
  const newPrize = {
    _id: Date.now().toString(),
    title,
    retailPrice,
    image,
    sourceUrl,
    claimed: false,
  };
  prizes.push(newPrize);
  res.status(201).json(newPrize);
});

// Mark a prize as claimed
router.put("/prizes/:id/claim", (req, res) => {
  const { id } = req.params;
  const prize = prizes.find((p) => p._id === id);
  if (!prize) return res.status(404).json({ error: "Prize not found" });
  prize.claimed = true;
  res.json(prize);
});

// Create raffle
router.post("/raffles", (req, res) => {
  const { prizeId } = req.body;
  const raffle = {
    id: Date.now().toString(),
    prizeId,
    createdAt: new Date(),
    status: "active",
  };
  raffles.push(raffle);
  res.status(201).json(raffle);
});

module.exports = router;
