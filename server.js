import express from "express";

// Creates an Express application
const app = express();

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());


// Returns a HTTP server that listen port 3000 
app.listen(3000, () => {
    console.log("Server listening...");
});

