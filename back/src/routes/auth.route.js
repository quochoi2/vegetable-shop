const AuthRoutes = require('express').Router()
const UserController = require('../controllers/auth.controller')

AuthRoutes.post('/register', UserController.register)
AuthRoutes.post('/login', UserController.login)

module.exports = AuthRoutes
