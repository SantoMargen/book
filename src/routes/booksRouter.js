const router = require('express').Router();
const BooksController = require("../controllers/controllerBook.js")

router.post("/", BooksController.createBook)
router.get("/", BooksController.getAllBooks)
router.get("/:idBook", BooksController.getBookById)
router.patch("/:idBook", BooksController.updateBookById)
router.delete("/:idBook", BooksController.deleteBookById)




module.exports = router