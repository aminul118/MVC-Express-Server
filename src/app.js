const express = require("express");
const cors = require("cors");
const { foodCollections } = require("./utils/dbConnect");
const { foodRouter } = require("./routes/foods.routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", foodRouter);

// Root Route
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "🏃‍➡️ Server is running MVC style",
  });
});

module.exports = { app };
