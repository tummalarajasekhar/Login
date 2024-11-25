const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/profile", upload.single("profilePic"), (req, res) => {
  const { name, email } = req.body;
  const profilePic = req.file ? req.file.path : null;

  // Simulate saving to the database
  console.log({ name, email, profilePic });

  res.status(200).send({ message: "Profile updated!" });
});

module.exports = router;
