//variables

const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const os = require('os')

const mid_main = require('./middleware/mid-main')

const router_main = require('./routers/rou-main')

const app = express()

//config

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())

app.use(mid_main.setLocal)

//server start

app.use('/', router_main)

app.listen(3000, () => {
        console.log('Server is running on port 3000 and on', os.hostname())
    })