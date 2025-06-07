// server/routes/faq.js
const express = require("express");
const router = express.Router();

let faqs = [
  { q: "What is TheTop36?", a: "It’s a platform for raffles + knowledge bundles." },
  { q: "How do I enter the raffle?", a: "You are automatically entered on purchase." },
];

// GET all FAQs
router.get("/", (req, res) => {
  res.json(faqs);
});

// POST new FAQ (optional admin feature)
router.post("/", (req, res) => {
  const { q, a } = req.body;
  const newFaq = { q, a };
  faqs.push(newFaq);
  res.status(201).json(newFaq);
});

module.exports = router;
