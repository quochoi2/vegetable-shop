const StatisticServices = require('../services/statistic.service')

const StatisticControllers = {
   getAllStatistics: async (req, res) => {
      try {
         const data = await StatisticServices.getAllStatistics()
         res.status(200).json(data)
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
   getTopSellProduct: async (req, res) => {
      try {
         const limit = req.query.limit || 5
         const data = await StatisticServices.getTopSellProduct(limit)
         res.status(200).json(data)
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
}

module.exports = StatisticControllers