// dbconfig.js - Creates a MongoDB Client and stablish connect to the the MongoDB Atlas with a connection string
// https://www.mongodb.com/products/platform/atlas-database

import { MongoClient } from "mongodb";

// connectToDatabase - will stablish the connection with the MongoDB using the given database connection string
export default async function connectToDatabase(conectionString) {

  // this object will represent the connection with the database
  let mongoClient;

  try {
      // create a new instance of MongoClient using the necessary information thats written in the connection string
      mongoClient = new MongoClient(conectionString);
      console.log("Connection to database cluster...");

      // with a instanced MongoClient it will connect with the Mongo
      await mongoClient.connect();
      console.log("Successfully connected to MongoDB Atlas!");

      return mongoClient;
  } catch (err) {
      console.error("Fail to connect with database!", err);
      process.exit();
  }
}