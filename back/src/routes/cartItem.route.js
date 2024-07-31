const CartItemRoute = require('express').Router()
const CartItemControllers = require('../controllers/cartItem.controller')

CartItemRoute.post('/', CartItemControllers.createCartItem)
CartItemRoute.get('/:id', CartItemControllers.getCartItemByCartId)
CartItemRoute.put('/:id', CartItemControllers.updateCartItem)
CartItemRoute.delete('/:id', CartItemControllers.deleteCartItem)

module.exports = CartItemRoute