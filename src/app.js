// definations
const express = require("express");
const cors = require("cors");
const { foodCollections } = require("./utils/dbConnect");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// playground
app.post("/foods", async (req, res) => {
  const food = req.body;
  console.log(food);
  const result = (await foodCollections).insertOne(food);
  res.send(result);
});

app.get("/foods", async (req, res) => {
  const result = (await foodCollections).find().toArray();
  res.send(result);
});

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "🏃‍➡️ Server is running MVC style",
  });
});

module.exports = { app };
