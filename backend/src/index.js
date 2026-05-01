// src/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/colleges", require("./routes/colleges"));
app.use("/api/user", require("./routes/user"));

app.listen(5000, () => console.log("Server running"));