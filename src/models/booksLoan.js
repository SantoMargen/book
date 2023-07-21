'use strict';
const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require("../config/connection.js")
class BookLoan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

}

BookLoan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "LOAN"
        },
        loan_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        return_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'loan_books',
    }
)





module.exports = BookLoan