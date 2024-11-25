import { MongoClient } from "mongodb";

export default async function connectToDatabase(conectionString) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(conectionString);
      console.log("Connection to database cluster...");
      await mongoClient.connect();
      console.log("Successfully connected to MongoDB Atlas!");

      return mongoClient;
  } catch (err) {
      console.error("Fail to connect with database!", err);
      process.exit();
  }
}