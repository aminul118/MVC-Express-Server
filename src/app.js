/**
 * ---------------------------
 *  !    Defination
 * ----------------------------
 */
const express = require("express");
const cors = require("cors");
const { foodRouter } = require("./routes/foods.routes");

const app = express();

/**
 * ---------------------------
 *  !    Middlewares
 * ----------------------------
 */
app.use(express.json());
app.use(cors());

/**
 * ---------------------------
 *  !    Routes
 * ----------------------------
 */
app.use("/api", foodRouter);

/**
 * ---------------------------
 *  !    Playgrounds
 * ----------------------------
 */


/**
 * ---------------------------
 *  !    Root Route
 * ----------------------------
 */
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "🏃‍➡️ Server is running MVC style",
  });
});

module.exports = { app };
