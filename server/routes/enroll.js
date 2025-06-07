const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Enrollment received:", req.body);
  res.status(200).json({ success: true });
});

module.exports = router;
