import express from "express";
import routes from "./src/routes/postRoutes.js";
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./src/config/swagger.js";

// Creates an Express application
const app = express();
const port = process.env.PORT || 3000;

routes(app);

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());


// Returns a HTTP server that listen port 3000 
app.listen(port, () => {
    console.log(`Server listening and running at http://localhost:${port}`);
    swaggerDocs(app, port)
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
