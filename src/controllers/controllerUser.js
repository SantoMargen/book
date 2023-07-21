const User = require("../models/user.js")
const { comparePassword } = require("../helpers/bcrypt.js")
const { generateToken } = require("../helpers/helpersToken.js")


class ControllerUser {
    static async registerUser(req, res, next) {
        try {
            const { fullname, email, username, password } = req.body
            const payload = {
                fullname,
                email,
                username,
                password,
            }

            const newRecord = await User.create(payload)

            const response = {
                id: newRecord.id,
                fullname: newRecord.fullname,
                email: newRecord.email,
                username: newRecord.username
            }
            res.status(201).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async userLogin(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) {
                throw { name: "EMAIL_REQUIRED" };
            }
            if (!password) {
                throw { name: "PASSWORD_REQUIRED" };
            }

            const user = await User.findOne({
                where: { email },
            });

            if (!user || !comparePassword(password, user.password)) {
                throw { name: "USER_NOT_FOUND" };
            }
            const payload = {
                id: user.id,
                email: user.email
            }
            const token = generateToken(payload)
            res.status(200).json({ access_token: token })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerUser