const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const UserModel = sequelize.define('users', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   email: { type: DataTypes.STRING, allowNull: false },
   password: { type: DataTypes.STRING, allowNull: false },
   role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' },
   name: { type: DataTypes.STRING, allowNull: true },
   image: { type: DataTypes.STRING, allowNull: true },
   gender: { type: DataTypes.STRING, allowNull: true },
   address: { type: DataTypes.STRING, allowNull: true },
   phone: { type: DataTypes.STRING, allowNull: true },
})

module.exports = UserModel
