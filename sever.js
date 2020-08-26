require("dotenv").config();

const express = require("express");

const app = express();

const clans = require("./controllers/clansController");

app.use("/api/clans", clans);

app.listen(3000, console.log("express running"));
