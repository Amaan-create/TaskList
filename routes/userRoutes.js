const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");

// Get all users (for assignment)
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find().select("_id name email role");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
