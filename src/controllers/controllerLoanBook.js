const BookLoan = require("../models/booksLoan.js")
const { Sequelize } = require("../config/connection.js")
const Op = Sequelize.Op;
const { getPagination, pagingData } = require('../helpers/pagination');

class ControllerLoanBook {
    static async createLoanBook(req, res, next) {
        try {
            const { book_id } = req.body
            const { id: user_id } = req.user

            const payload = {
                book_id,
                user_id
            }

            const findLoan = BookLoan.findOne({
                where: {
                    [Op.and]: [
                        { user_id: user_id },
                        { status: "LOAN" }
                    ]
                }
            })

            if (findLoan) throw { name: "ALREADY_BOOK_LOAN" }
            const newRecord = await BookLoan.create(payload)

            res.status(201).json(newRecord)
        } catch (error) {
            next(error)
        }
    }

    static async findLoanBookById(req, res, next) {
        try {
            const { loanBook: id } = req.params
            if (!Number(id)) throw { name: "NOTFOUND" }

            const findLoanBook = await BookLoan.findByPk(id)
            if (!findLoanBook) throw { name: "NOTFOUND" }

            res.status(200).json(findLoanBook)
        } catch (error) {
            next(error)
        }
    }

    static async findAllLoanBook(req, res, next) {
        try {
            const { page, size } = req.query;
            const { limit, offset } = getPagination(page, size);

            let option = {
                limit,
                offset,
            }
            const allLoanBook = await BookLoan.findAndCountAll(option)
            const loanBooks = pagingData(allLoanBook, page, limit);

            if (loanBooks.totalItems === 0) throw { name: 'NOTFOUND' };

            res.status(200).json(loanBooks);
        } catch (error) {
            next(error)
        }
    }

    static async updateStatus(req, res, next) {
        try {
            const { loanBook: id } = req.params
            if (!Number(id)) throw { name: "NOTFOUND" }

            const loanBookUpdated = await BookLoan.update(
                {
                    status: "RETURN"
                },
                {
                    where: { id: id },
                    returning: true,
                }
            )
            res.status(200).json(loanBookUpdated[1][0])
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerLoanBook