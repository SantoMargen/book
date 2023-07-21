const jwt = require("jsonwebtoken");
const config = require("../config")

const secret = config.api.jwtSecret

const generateToken = (payload) => {
    return jwt.sign(payload, secret);
};

const verifyToken = (token) => {
    return jwt.verify(token, secret);
};

module.exports = {
    generateToken,
    verifyToken,
};
