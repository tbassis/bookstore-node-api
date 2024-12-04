// router/books.js -  This file maps all HTTP requests related to books
import { Router } from 'express';
import { listAllBooks, createNewBook } from "../controllers/postController.js";

const bookRouter = Router();

/** GET Methods */

/**
* @swagger
* /api/books:
*   get:
*     tags: 
*     - Books Controller
*     summary: Retrieve a list of books
*     parameters:
*     responses:
*       200:
*         description: A list of books
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
*                   title:
*                     type: string
*                     example: O Senhor dos Anéis
*                   author:
*                     type: string
*                     example: J.R.R. Tolkien
*                   year:
*                     type: integer
*                     example: 1954
*                   genre:
*                     type: string
*                     example: Fantasia
*                   publisher:
*                     type: string
*                     example: Martins Fontes
*                   synopsis:
*                     type: string
*                     example: Uma jornada épica
*                   isbn:
*                     type: string
*                     example: 9788533624303
*                   pages:
*                     type: integer
*                     example: 1170
*                   language:
*                     type: string
*                     example: Português
*/
bookRouter.route("/").get(listAllBooks)

/** POST Methods */
/**
* @swagger
* /api/books:
*   post:
*     tags: 
*     - Books Controller
*     summary: Add a new book to the database
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               title:
*                 type: string
*                 example: O Senhor dos Anéis
*               author:
*                 type: string
*                 example: J.R.R. Tolkien
*               year:
*                 type: integer
*                 example: 1954
*               genre:
*                 type: string
*                 example: Fantasia
*               publisher:
*                 type: string
*                 example: Martins Fontes
*               synopsis:
*                 type: string
*                 example: Uma jornada épica
*               isbn:
*                 type: string
*                 example: 9788533624303
*               pages:
*                 type: integer
*                 example: 1170
*               language:
*                 type: string
*                 example: Português
*             required:
*               - title
*               - author
*               - year
*               - genre
*               - publisher
*               - synopsis
*               - isbn
*               - pages
*               - language
*     responses:
*       201:
*         description: success
*/
bookRouter.route("/").post(createNewBook)

export default bookRouter;
