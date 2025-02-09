const express = require("express");
const {
  postFood,
  getFoods,
  getIndivisualFood,
  deleteIndivisualFood,
} = require("../controllers/foods.controllers");
const check = require("../middlewares/check");

const foodRouter = express.Router();

// Post indivisual food
foodRouter.post("/foods", postFood);
// Get all foods
foodRouter.get("/foods", check, getFoods);
// Get food by indivisal id
foodRouter.get("/foods/:id", getIndivisualFood);
// Delete food by indivisal id
foodRouter.delete("/foods/:id", deleteIndivisualFood);

module.exports = { foodRouter };
