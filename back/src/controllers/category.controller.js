const CategoryServices = require('../services/category.service')

const CategoryControllers = {
   getAllCategories: async (req, res) => {
      try {
         const data = await CategoryServices.getAllCategories()
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ message: error.message })
      }
   },
   createCategory: async (req, res) => {
      try {
         const dataCreate = req.body
         const data = await CategoryServices.createCategory(dataCreate)

         if (!data) {
            return res.json({ message: 'Not found any data' })
         }
         res.status(201).json({
            message: 'Created successfully',
            data: data
         })
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
   getCategoryById: async (req, res) => {
      try {
         const { id } = req.params.id
         const data = await CategoryServices.getCategoryById(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
   updateCategory: async (req, res) => {
      try {
         const id = req.params.id
         const dataUpdate = req.body
         const data = await CategoryServices.updateCategory(id, dataUpdate)
         res.status(200).json({
            message: 'Updated successfully',
            data: data
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   deleteCategory: async (req, res) => {
      try {
         const id = req.params.id
         await CategoryServices.deleteCategory(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   getCategoryList: async (req, res) => {
      try {
         const { page = 1, limit = 10, orderBy = 'id', sortBy = 'desc', search } = req.query

         const data = await CategoryServices.getCategoryList({
            page: +page ? +page : 1,
            limit: +limit ? +limit : 10,
            orderBy,
            sortBy,
            search
         })
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ message: 'Error fetching category list' })
      }
   }
}

module.exports = CategoryControllers