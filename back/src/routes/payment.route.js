const PaymentRoute = require('express').Router()
const PaymentControllers = require('../controllers/payment.controller')

PaymentRoute.get('/', PaymentControllers.getAllPayments)
PaymentRoute.post('/', PaymentControllers.createPayment)
PaymentRoute.get('/:id', PaymentControllers.getAllPaymentByUserId)
PaymentRoute.put('/:id', PaymentControllers.updatePayment)
PaymentRoute.delete('/:id', PaymentControllers.deletePayment)

module.exports = PaymentRoute