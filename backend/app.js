const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const connectToDb = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js')
const captainRoutes = require('./routes/captain.routes.js')
const cookieParser = require('cookie-parser')

connectToDb()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send('Hello, world')
})
app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

module.exports = app