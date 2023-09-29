module.exports =app =>{
const express = require("express");
const books = require("../controllers/booksController");
const router = express.Router();


router.post("/", books.create);
router.get("/", books.findAll);
router.put("/:id", books.update);
router.delete("/:id", books.delete);
///api/books/search?searchTerm=program
router.get("/search", books.searchByTitle);
router.get("/author/name/:name", books.findByAuthorName);

app.use('/api/books', router)

}
