import express from "express";
import multer from "multer";
import { listAllBooks, listAllAuthors, createNewBook, createNewAuthor, insertNewEvaluation } from "../controllers/postController.js";

// define the destination of the files that are uploaded to the server
const upload = multer({dest: "./uploads"})

const routes = (app) => {
    // defines to the server to return a json object to the client 
    app.use(express.json())

    // index the function that will be running when the server call that route
    app.get("/books", listAllBooks);
    app.post("/books", createNewBook)

    app.get("/authors", listAllAuthors);
    app.post("/author", createNewAuthor);

    // upload.single("image") define that the key of the form-data to upload the image is image
    app.post("/evaluation", upload.single("image"), insertNewEvaluation);
}

export default routes;
