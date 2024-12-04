// router/books.js -  This file maps all HTTP requests related to books
import { Router } from 'express';
import { listAllBooks, createNewBook } from "../controllers/postController.js";

const bookRouter = Router();

/** GET Methods */

/**
* @swagger
* /books:
*   get:
*     summary: Retrieve a list of books
*     responses:
*       200:
*         description: A list of books
*/
bookRouter.route("/").get(listAllBooks)

/** POST Methods */
bookRouter.route("/").post(createNewBook)

export default bookRouter;
