// this file its responsable to connect to the MongoDB Atlas, access a collection, wrap the response and give to the controller

import conectarAoBanco from "../config/dbconfig.js";

// stores all data related to the database cluster connection
const connection = await conectarAoBanco(process.env.CONNECTIONDB_STRING)

async function getAllBooks() {
	// connect to the specific database  
    const db = connection.db("bookstore-node-api");

	// stores a collection from the Database
    const collection = db.collection("books");

	// filter — The filter predicate. If unspecified, then all documents in the collection will match the predicate
    return collection.find().toArray();
}

export default getAllBooks;