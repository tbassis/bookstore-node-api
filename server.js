import express from "express";
import swaggerDocs from "./src/config/swagger.js";
import routes from "./src/router/index.js";

// Creates an Express application
const app = express();
const port = process.env.PORT || 3000;

routes(app);

// Returns a HTTP server that listen port 3000 
app.listen(port, () => {
    console.log(`Server listening and running at http://localhost:${port}`);
    swaggerDocs(app, port)
});
