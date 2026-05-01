const pool = require("../config/db");

const getColleges = async (req, res) => {
  try {
    const { search = "", location = "", minFees = 0, maxFees = 10000000 } = req.query;

    const query = `
      SELECT * FROM colleges
      WHERE LOWER(name) LIKE LOWER($1)
      AND LOWER(location) LIKE LOWER($2)
      AND fees BETWEEN $3 AND $4
      ORDER BY rating DESC
    `;

    const values = [
      `%${search}%`,
      `%${location}%`,
      minFees,
      maxFees,
    ];

    const result = await pool.query(query, values);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getColleges };