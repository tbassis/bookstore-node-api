import { getAllBooks, getAllAuthors } from "../models/postModel.js";

export async function listAllBooks (rec, res) {
    const allBooks = await getAllBooks();
    res.status(200).json(allBooks); 
}

export async function listAllAuthors (rec, res) {
    const allAuthors = await getAllAuthors();
    res.status(200).json(allAuthors)
}
