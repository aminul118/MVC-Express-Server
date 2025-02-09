const { ObjectId } = require("mongodb");
const { foodCollections } = require("../utils/dbConnect");

// Post food
const postFood = async (req, res) => {
  try {
    const food = req.body;
    console.log(food);

    const collection = await foodCollections;
    const result = await collection.insertOne(food);

    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get all foods
const getFoods = async (req, res) => {
  try {
    const collection = await foodCollections;
    const result = await collection.find().toArray();

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// get food by id
const getIndivisualFood = async (req, res) => {
  try {
    const { id } = req.params;
    const query = {
      _id: new ObjectId(id),
    };
    const collection = await foodCollections;
    const result = await collection.findOne(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { postFood, getFoods, getIndivisualFood };
