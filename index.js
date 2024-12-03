const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Power Core Gym Server is Running");
});

app.listen(port, (req, res) => {
  console.log(`Power Core Gym Server is Running on Port: ${port}`);
});
