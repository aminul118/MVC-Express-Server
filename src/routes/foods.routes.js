const express = require("express");
const {
  postFood,
  getFoods,
  getIndivisualFood,
  deleteIndivisualFood,
} = require("../controllers/foods.controllers");
const foodRouter = express.Router();

foodRouter.post("/foods", postFood);
foodRouter.get("/foods", getFoods);
foodRouter.get("/foods/:id", getIndivisualFood);
foodRouter.delete("/foods/:id", deleteIndivisualFood);

module.exports = { foodRouter };
