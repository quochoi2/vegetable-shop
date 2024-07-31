const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
const ManufactureModel = require('./manufacture.model')

const InvoiceModel = sequelize.define('invoices', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Chưa duyệt' },
   manufacture_id: { type: DataTypes.STRING, allowNull: false },
})

InvoiceModel.belongsTo(ManufactureModel, { foreignKey: 'manufacture_id' })

module.exports = InvoiceModel
