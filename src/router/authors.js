// This file maps all HTTP requests related to authors
import { Router } from 'express';
import { listAllAuthors, createNewAuthor } from "../controllers/postController.js";

const authorsRouter = Router();

/** GET Methods */
authorsRouter.route("/").get(listAllAuthors)

/** POST Methods */
authorsRouter.route("/").post(createNewAuthor)

export default authorsRouter;