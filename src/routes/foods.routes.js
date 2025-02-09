const express = require("express");
const {
  postFood,
  getFoods,
  getIndivisualFood,
} = require("../controllers/foods.controllers");
const foodRouter = express.Router();

foodRouter.post("/foods", postFood);
foodRouter.get("/foods", getFoods);
foodRouter.get("/foods/:id", getIndivisualFood);

module.exports = { foodRouter };
