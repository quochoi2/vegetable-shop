const BillDetailRoute = require('express').Router()
const BillDetailControllers = require('../controllers/billDetail.controller')

BillDetailRoute.post('/', BillDetailControllers.createBillDetail)
BillDetailRoute.get('/:id', BillDetailControllers.getBillDetailByBillId)
BillDetailRoute.delete('/:id', BillDetailControllers.deleteBillDetail)

module.exports = BillDetailRoute