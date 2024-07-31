const StatisticRoutes = require('express').Router()
const StatisticControllers = require('../controllers/statistic.controller')

StatisticRoutes.get('/getAll', StatisticControllers.getAllStatistics)
StatisticRoutes.get('/getTopSell', StatisticControllers.getTopSellProduct)

module.exports = StatisticRoutes