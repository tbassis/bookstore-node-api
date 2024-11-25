import express from "express";
import { listAllBooks, listAllAuthors } from "../controllers/postController.js";

const routes = (app) => {
    // defines to the server to return a json object to the client 
    app.use(express.json())

     // index the function that will be running when the server call that route
     app.get("/books", listAllBooks);

     app.get("/authors", listAllAuthors);
}

export default routes;
