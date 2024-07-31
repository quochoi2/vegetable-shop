const ManufactureRoute = require('express').Router()
const ManufactureControllers = require('../controllers/manufacture.controller')

ManufactureRoute.get('/getall', ManufactureControllers.getAllManufactures)
ManufactureRoute.post('/', ManufactureControllers.createManufacture)
ManufactureRoute.get('/:id', ManufactureControllers.getManufactureById)
ManufactureRoute.put('/:id', ManufactureControllers.updateManufacture)
ManufactureRoute.delete('/:id', ManufactureControllers.deleteManufacture)
ManufactureRoute.get('/', ManufactureControllers.getManufactureList)

module.exports = ManufactureRoute