import express from "express";
import routes from "./src/router/index.js";

// Creates an Express application
const app = express();

routes(app);

// Returns a HTTP server that listen port 3000 
app.listen(3000, () => {
    console.log("Server listening...");
});