const { Sequelize } = require('sequelize');
const config = require('./index.js');

const sequelize = new Sequelize({
    dialect: config.db.dialect,
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port,
});

module.exports = sequelize;
