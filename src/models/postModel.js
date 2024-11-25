// this file its responsable to connect to the MongoDB Atlas, access a collection, wrap the response and give to the controller

import conectarAoBanco from "../config/dbconfig.js";

// stores all data related to the database cluster connection
const connection = await conectarAoBanco(process.env.CONNECTIONDB_STRING)

function getCollection(collectionName) {
    // connect to the specific database  
    const db = connection.db(process.env.MONGODB_NAME);

	// stores a collection from the database
    const collection = db.collection(collectionName);

    return collection;
}

export async function getAllBooks() {
    const booksCollection = getCollection("books")
    return booksCollection.find().toArray()
}

export async function getAllAuthors() {
    const authorsCollection = getCollection("authors");
    return authorsCollection.find().toArray()
}

export async function postNewBook(newBook) {
    const booksCollection = getCollection("books")
    return booksCollection.insertOne(newBook)
}
