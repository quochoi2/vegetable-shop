const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const ManufactureModel = sequelize.define('manufactures', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, allowNull: false },
   email: { type: DataTypes.STRING, allowNull: false }
})

module.exports = ManufactureModel
