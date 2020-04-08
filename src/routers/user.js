const express = require("express");
const router = new express.Router();

router.get("/users", async (req, res) =>
  res.send("request successfully received")
);

module.exports = router;
