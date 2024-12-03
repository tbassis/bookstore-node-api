import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"

const options = {

  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bookstore Node API',
      description: "Este repositório tem como finalidade servir de caso de estudo de desenvolvimento de uma api utlizando o framework Express de Node.js",
      contact: {
        name: "Túlio Assis",
        email: "tulioassis.18@gmail.com",
        url: "https://github.com/tbassis/bookstore-node-api"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server"
      },
    ]
  },
  // looks for configuration in specified directories
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(swaggerSpec)
  })
};

export default swaggerDocs
