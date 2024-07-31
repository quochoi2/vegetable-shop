const { Op } = require('sequelize')
const CategoryModel = require('../models/category.model')
const ManufactureModel = require('../models/manufacture.model')
const ProductModel = require('../models/product.model')

const ProductServices = {
   createProduct: async (dataCreate) => {
      try {
         return await ProductModel.create(dataCreate)
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getProductById: async (id) => {
      try {
         return await ProductModel.findByPk(id)
      } catch (error) {
         throw new Error(error.message)
      }
   },
   updateProduct: async (id, dataUpdate) => {
      try {
         const data = await ProductModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.update(dataUpdate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deleteProduct: async (id) => {
      try {
         const data = await ProductModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.destroy()
         return { message: 'Deleted successfully' }
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getProductList: async ({ page, limit, orderBy, sortBy, search }) => new Promise(async (resolve, reject) => {
      try {
         const foreginKey = [
            { model: CategoryModel, attributes: ['name'] },
            { model: ManufactureModel, attributes: ['name'] },
         ]
         const query = {}

         if (search) {
            query[Op.or] = [
               { name: { [Op.substring]: search } },
               { id: { [Op.substring]: search } }
            ]
         }

         const queries = {
            offset: (page - 1) * limit,
            limit
         }

         if (orderBy) {
            queries.order = [[orderBy, sortBy]]
         }

         const data = await ProductModel.findAndCountAll({
            where: query,
            include: foreginKey,
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
   getProductByCategory: async ({ id, page = 1, limit = 4, orderBy, sortBy }) => {
      try {
         const offset = (page - 1) * limit;

         const data = await ProductModel.findAndCountAll({
            where: { category_id: id },
            offset,
            limit,
            order: [[orderBy, sortBy]],
            include: [
               { model: CategoryModel, attributes: ['name'] },
               { model: ManufactureModel, attributes: ['name'] },
            ]
         });

         return {
            totalItems: data.count,
            totalPages: Math.ceil(data.count / limit),
            currentPage: page,
            data: data.rows
         }
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = ProductServices