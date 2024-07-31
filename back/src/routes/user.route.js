const UserRoute = require('express').Router()
const UserControllers = require('../controllers/user.controller')

UserRoute.get('/', UserControllers.getUserList)
UserRoute.get('/:id', UserControllers.getUserById)
UserRoute.put('/:id', UserControllers.updateUser)
UserRoute.delete('/:id', UserControllers.deleteUser)

module.exports = UserRoute