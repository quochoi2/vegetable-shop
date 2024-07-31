const InvoiceRoutes = require('express').Router()
const InvoiceControllers = require('../controllers/invoice.controller')

InvoiceRoutes.get('/', InvoiceControllers.getInvoiceList)

module.exports = InvoiceRoutes