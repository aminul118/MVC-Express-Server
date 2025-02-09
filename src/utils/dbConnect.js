require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const DB = client.db("practiceDB");
const foodCollections = DB.createCollection("foods");

const dbConnect = async () => {
  return client.connect();
};

module.exports = { dbConnect, foodCollections };
