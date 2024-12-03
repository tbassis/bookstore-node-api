import express from "express";
import { listAllBooks, listAllAuthors, createNewBook, createNewAuthor } from "../controllers/postController.js";

const routes = (app) => {
    // defines to the server to return a json object to the client 
    app.use(express.json())

     app.get("/authors", listAllAuthors);
     app.post("/author", createNewAuthor);
}

export default routes;
