const express = require("express");
const router = express.Router();

// Mock user data
const users = [{ email: "test@example.com", password: "password" }];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.status(200).send({ message: "Login successful" });
  } else {
    res.status(401).send({ message: "Invalid credentials" });
  }
});

module.exports = router;
