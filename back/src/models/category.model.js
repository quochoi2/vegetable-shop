const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const CategoryModel = sequelize.define('categories', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, allowNull: false }
})

module.exports = CategoryModel
