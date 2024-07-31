const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const dotenv = require('dotenv')
const routers = require('./routes/router')
const path = require('path')

const { connection } = require('./config/db')
dotenv.config()
connection()

const port = process.env.PORT || 3333
const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// route
app.use('/api', routers)

app.use((req, res) => {
   if (req.path === '/') {
      res.json({ message: 'Hello my lord!' })
   } else {
      res.json({ message: 'You do not have this page!' })
   }
})

app.listen(port, () => {
   console.log(`Server is listening with localhost:${port}`)
})
