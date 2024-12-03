// THis file maps all HTTP requests related to books
import { Router } from 'express';
import { listAllBooks, createNewBook } from "../controllers/postController.js";

const bookRouter = Router();

/** GET Methods */
bookRouter.route("/").get(listAllBooks)

/** POST Methods */
bookRouter.route("/").post(createNewBook)

export default bookRouter;
