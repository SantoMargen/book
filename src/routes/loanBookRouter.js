const router = require('express').Router();
const LoanBookController = require("../controllers/controllerLoanBook.js")

router.post("/books", LoanBookController.createLoanBook)
router.get("/books", LoanBookController.findAllLoanBook)
router.get("/books/:loanBook", LoanBookController.findLoanBookById)
router.put("/books/:loanBook", LoanBookController.updateStatus)




module.exports = router