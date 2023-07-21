const router = require('express').Router();
const UserRouter = require("./userRouter.js")
const BookRouter = require("./booksRouter.js")
const LoanBookRouter = require("./loanBookRouter.js")
const Authentication = require("../middlewares/authentication.js")


router.use("/user", UserRouter)
router.use(Authentication)
router.use("/books", BookRouter)
router.use("/loan", LoanBookRouter)



module.exports = router