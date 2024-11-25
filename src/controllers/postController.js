import getAllBooks from "../models/postModel.js";

async function listAllBooks (rec, res) {
    const allBooks = await getAllBooks();
    res.status(200).json(allBooks); 
}

export default listAllBooks;