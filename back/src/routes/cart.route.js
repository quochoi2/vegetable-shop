const CartRoute = require('express').Router()
const CartControllers = require('../controllers/cart.controller')

CartRoute.post('/', CartControllers.createCart)
CartRoute.delete('/:id', CartControllers.deleteCart)

module.exports = CartRoute