const CategoryModel = require('../models/category.model')
const { Op } = require('sequelize')

const CategoryServices = {
   createCategory: async (dataCreate) => {
      try {
         const data = await CategoryModel.create(dataCreate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getAllCategories: async () => {
      try {
         const data = await CategoryModel.findAll()
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getCategoryById: async (id) => {
      try {
         const data = await CategoryModel.findByPk(id);
         return data;
      } catch (error) {
         throw new Error(error.message);
      }
   },
   updateCategory: async (id, dataUpdate) => {
      try {
         const data = await CategoryModel.findByPk(id)
         if (!data) {
            throw new Error('Category not found')
         }
         await data.update(dataUpdate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deleteCategory: async (id) => {
      try {
         const data = await CategoryModel.findByPk(id)
         if (!data) {
            throw new Error('Category not found')
         }
         await data.destroy()
         return { message: 'Deleted successfully' }
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getCategoryList: async ({ page, limit, orderBy, sortBy, search }) => new Promise(async (resolve, reject) => {
      try {
         const query = {}

         if (search) {
            query.name = { [Op.substring]: search }
         }

         const queries = {
            offset: (page - 1) * limit,
            limit
         }

         if (orderBy) {
            queries.order = [[orderBy, sortBy]]
         }

         const data = await CategoryModel.findAndCountAll({
            where: query,
            ...queries
         })

         const res = {
            totalItems: data?.count,
            totalPages: Math.ceil(data?.count / limit),
            currentPage: page,
            data: data?.rows
         }

         resolve(res)
      } catch (error) {
         reject(error)
      }
   }),
}

module.exports = CategoryServices