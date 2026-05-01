// controllers/userController.js
const pool = require("../db");

exports.saveCollege = async (req, res) => {
  const userId = req.user.id;
  const { collegeId } = req.body;

  await pool.query(
    "INSERT INTO saved_colleges(user_id,college_id) VALUES($1,$2)",
    [userId, collegeId]
  );

  res.json({ msg: "Saved" });
};