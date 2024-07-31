const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
const BillModel = require('./bill.model')
const ProductModel = require('./product.model')

const BillDetailModel = sequelize.define('billDetails', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   quantity: { type: DataTypes.INTEGER, allowNull: true },
   total: { type: DataTypes.INTEGER, allowNull: true },
   bill_id: { type: DataTypes.INTEGER, allowNull: false },
   product_id: { type: DataTypes.INTEGER, allowNull: false },
})

BillDetailModel.belongsTo(BillModel, { foreignKey: 'bill_id' })
BillDetailModel.belongsTo(ProductModel, { foreignKey: 'product_id' })

module.exports = BillDetailModel