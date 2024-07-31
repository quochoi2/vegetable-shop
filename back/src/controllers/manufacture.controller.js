const ManufactureServices = require('../services/manufacture.service')

const ManufactureControllers = {
   getAllManufactures: async (req, res) => {
      try {
         const data = await ManufactureServices.getAllManufactures()
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ message: error.message })
      }
   },
   createManufacture: async (req, res) => {
      try {
         const dataCreate = req.body
         const data = await ManufactureServices.createManufacture(dataCreate)

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
   getManufactureById: async (req, res) => {
      try {
         const id = req.params.id
         const data = await ManufactureServices.getManufactureById(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message })
      }
   },
   updateManufacture: async (req, res) => {
      try {
         const id = req.params.id
         const dataUpdate = req.body
         const data = await ManufactureServices.updateManufacture(id, dataUpdate)
         res.status(200).json({
            message: 'Updated successfully',
            data: data
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   deleteManufacture: async (req, res) => {
      try {
         const id = req.params.id
         await ManufactureServices.deleteManufacture(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   getManufactureList: async (req, res) => {
      try {
         const { page = 1, limit = 10, orderBy = 'id', sortBy = 'desc', search } = req.query

         const data = await ManufactureServices.getManufactureList({
            page: +page ? +page : 1,
            limit: +limit ? +limit : 10,
            orderBy,
            sortBy,
            search
         })
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ message: error.message })
      }
   }
}

module.exports = ManufactureControllers