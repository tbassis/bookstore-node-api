import express from "express";
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

const routes = (app) => {
    // defines to the server to return a json object to the client 
    app.use(express.json())

     // index the function that will be running when the server call that route
     app.get("/books", async (rec, res) => {
        const allPosts = await getAllBooks();
        res.status(200).json(allPosts); 
    });
}

export default routes;
