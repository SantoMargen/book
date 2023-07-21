const { verifyToken } = require("../helpers/helpersToken.js")
const User = require("../models/user.js")

const Authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) {
            throw { name: "UNAUTHENTICATED" };
        }
        const payload = verifyToken(access_token)
        const user = await User.findOne({
            where: {
                id: payload.id,
                email: payload.email
            }
        })

        if (!user) throw { name: "AUTHENTICATION" };

        req.user = {
            id: user.id,
            email: user.email
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = Authentication