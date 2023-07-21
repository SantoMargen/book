const Book = require("../models/book.js")


class ControllerBook {
    static async createBook(req, res, next) {
        try {
            const { title, isbn, publisher } = req.body
            const payload = {
                title,
                isbn,
                publisher
            }
            const newRecord = await Book.create(payload)

            res.status(201).json(newRecord)
        } catch (error) {
            next(error)
        }
    }

    static async getAllBooks(req, res, next) {
        try {
            const allbooks = await Book.findAll()

            res.status(200).json(allbooks)
        } catch (error) {
            next(error)
        }
    }

    static async getBookById(req, res, next) {
        try {
            const { idBook: id } = req.params
            if (!Number(id)) throw { name: "NOTFOUND" }

            const findBook = await Book.findByPk(id)

            if (!findBook) throw { name: "NOTFOUND" }

            res.status(200).json(findBook)
        } catch (error) {
            next(error)
        }
    }

    static async updateBookById(req, res, next) {
        try {
            const { idBook: id } = req.params
            const input = req.body
            if (!Number(id)) throw { name: "NOTFOUND" }

            const findBook = await Book.findByPk(id)
            if (!findBook) throw { name: "NOTFOUND" }

            const payload = {}
            payload.title = input.title ? input.title : findBook.title
            payload.isbn = input.isbn ? input.isbn : findBook.isbn
            payload.publisher = input.publisher ? input.publisher : findBook.publisher

            await Book.update(payload,
                {
                    where: { id },
                    returning: true
                })

            res.status(200).json({ message: "Book has been updated" })
        } catch (error) {
            next(error)
        }
    }

    static async deleteBookById(req, res, next) {
        try {
            const { idBook: id } = req.params
            if (!Number(id)) throw { name: "NOTFOUND" }

            const book = await Book.findByPk(id)
            if (!book) throw { name: "NOTFOUND" }


            await Book.destroy({ where: { id } })

            res.status(200).json({ message: "Book has been deleted" })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = ControllerBook