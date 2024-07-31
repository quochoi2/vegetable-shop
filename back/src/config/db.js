const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('web_banraucu', 'root', '88888888', {
   host: 'localhost',
   dialect: 'mysql',
   logging: false
})

const connection = async () => {
   try {
      await sequelize.authenticate()
      console.log('Connect to database successfully')
   } catch (error) {
      console.log('Can not connect to database with ', error)
   }
}

const JWT_SECRET = 'HoideptraivodoibadaotuyetdinhkhongaisanhbangduochettrenthegioinaychicomoiminhHoimathoi'

module.exports = { sequelize, connection, JWT_SECRET }
