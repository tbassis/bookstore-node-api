// This file maps all HTTP requests related to authors
import { Router } from 'express';
import { listAllAuthors, createNewAuthor } from "../controllers/postController.js";

const authorsRouter = Router();

/** GET Methods */
/**
* @swagger
* /api/authors:
*   get:
*     tags: 
*     - Authors Controller
*     summary: Retrieve a list of books
*     parameters:
*     responses:
*       200:
*         description: A list of authors
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   _id:
*                     type: string
*                     example: 673f6c1bea72257885dab606
*                   name:
*                     type: string
*                     example: Machado de Assis
*                   nationality:
*                     type: string
*                     example: Brasileiro
*                   born:
*                     type: integer
*                     example: 1839
*                   died:
*                     type: integer
*                     example: 1908
*/
authorsRouter.route("/").get(listAllAuthors)

/** POST Methods */
/**
* @swagger
* /api/authors:
*   post:
*     tags: 
*     - Authors Controller
*     summary: Add a new author to the database
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*                 example: Machado de Assis
*               nationality:
*                 type: string
*                 example: Brasileiro
*               born:
*                 type: integer
*                 example: 1839
*               died:
*                 type: integer
*                 example: 1908
*             required:
*               - name
*               - nationality
*               - born
*     responses:
*       201:
*         description: success
*/
authorsRouter.route("/").post(createNewAuthor)

export default authorsRouter;