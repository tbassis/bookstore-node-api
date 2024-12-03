// This file will index all routes from the application
import express from "express";
import bookRouter from "./books.js";
import authorsRouter from "./authors.js";

const routes = (app) => {
    /** Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. */ 
    app.use(express.json())

    /** API routes */ 
    app.use("/api/books", bookRouter);
    app.use("/api/authors", authorsRouter);
}

export default routes;
