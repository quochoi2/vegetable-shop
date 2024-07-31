const ManufactureModel = require('../models/manufacture.model')
const { Op } = require('sequelize')

const ManufactureServices = {
   getAllManufactures: async () => {
      try {
         const data = await ManufactureModel.findAll()
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   createManufacture: async (dataCreate) => {
      try {
         const data = await ManufactureModel.create(dataCreate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getManufactureById: async (id) => {
      try {
         const data = await ManufactureModel.findByPk(id);
         return data
      } catch (error) {
         throw new Error(error.message);
      }
   },
   updateManufacture: async (id, dataUpdate) => {
      try {
         const data = await ManufactureModel.findByPk(id);
         if (!data) {
            throw new Error('Not found');
         }
         await data.update(dataUpdate);
         return data
      } catch (error) {
         throw new Error(error.message);
      }
   },
   deleteManufacture: async (id) => {
      try {
         const data = await ManufactureModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.destroy()
         return { message: 'Deleted successfully' }
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getManufactureList: async ({ page, limit, orderBy, sortBy, search }) => new Promise(async (resolve, reject) => {
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

         const data = await ManufactureModel.findAndCountAll({
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

module.exports = ManufactureServices