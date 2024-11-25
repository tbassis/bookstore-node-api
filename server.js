import express from "express";
import routes from "./src/routes/postRoutes.js";

// Creates an Express application
const app = express();

routes(app);

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());


// Returns a HTTP server that listen port 3000 
app.listen(3000, () => {
    console.log("Server listening...");
});


app.get("/books", (req, res) => {
    res.status(200).send("All books in the database");
});

app.get("/books/:id", (req, res) => {
    res.status(200).send("Get book by id");
});