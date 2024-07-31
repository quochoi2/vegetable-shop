const CategoryRoute = require('express').Router()
const CategoryControllers = require('../controllers/category.controller')

CategoryRoute.get('/getall', CategoryControllers.getAllCategories)
CategoryRoute.post('/', CategoryControllers.createCategory)
CategoryRoute.get('/:id', CategoryControllers.getCategoryById)
CategoryRoute.put('/:id', CategoryControllers.updateCategory)
CategoryRoute.delete('/:id', CategoryControllers.deleteCategory)
CategoryRoute.get('/', CategoryControllers.getCategoryList)

module.exports = CategoryRoute