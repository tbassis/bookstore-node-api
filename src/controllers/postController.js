import { getAllBooks, getAllAuthors, postNewBook } from "../models/postModel.js";

export async function listAllBooks(req, res) {
    const allBooks = await getAllBooks();
    res.status(200).json(allBooks); 
}

export async function listAllAuthors(req, res) {
    const allAuthors = await getAllAuthors();
    res.status(200).json(allAuthors);
}

export async function createNewBook(req, res) {
    const newBook = req.body;
    
    try {
        const bookCreated = await postNewBook(newBook);
        res.status(200).json(bookCreated);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error": "Fail to create a new book in the database"})
    }
}
