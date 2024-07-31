const BillRoute = require('express').Router()
const BillControllers = require('../controllers/bill.controller')

BillRoute.post('/', BillControllers.createBill)
BillRoute.get('/:id', BillControllers.getAllBillByUserId)
BillRoute.put('/:id', BillControllers.updateBill)
BillRoute.delete('/:id', BillControllers.deleteBill)
BillRoute.get('/getall', BillControllers.getAllBills)
BillRoute.get('/', BillControllers.getBillList)

module.exports = BillRoute