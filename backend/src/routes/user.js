// routes/user.js
const router = require("express").Router();
const auth = require("../middleware/auth");
const { saveCollege } = require("../controllers/userController");

router.post("/save", auth, saveCollege);

module.exports = router;