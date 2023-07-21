const router = require('express').Router();
const LoanBookController = require("../controllers/controllerLoanBook.js")

router.post("/books", LoanBookController.createLoanBook)
router.get("/books", LoanBookController.findAllLoanBook)
router.get("/books/:idLoanBook", LoanBookController.findLoanBookById)
router.put("/books/:idLoanBook", LoanBookController.updateStatus)




module.exports = router