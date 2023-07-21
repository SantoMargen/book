'use strict';
const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require("../config/connection.js")
const { hashPassword } = require("../helpers/bcrypt.js")

class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Invalid format email"
                },
                notEmpty: {
                    msg: "Email is required",
                },
                notNull: {
                    msg: "Email is required",
                },
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Password is required",
                },
                notNull: {
                    msg: "Password is required",
                },
                min: {
                    args: [8],
                    msg: "Password minimal 8 character",
                },
                isAlphanumeric: {
                    args: true,
                    msg: 'Password must contain only letters and numbers.',
                },
                noSpecialCharacters: function (value) {
                    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                        throw new Error('Password cannot contain special characters.');
                    }
                },
            },
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'users',
    }
)

User.addHook('beforeCreate', (user) => {
    user.password = hashPassword(user.password);
});

module.exports = User