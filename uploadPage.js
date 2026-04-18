

const express = require('express')
const morgan = require('morgan')
const os = require('os')
const cors = require('cors')

const router_admin = require('./routers/rou-admin')

const app = express()

//config

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.options('/', cors())

//server start

app.use('/', router_admin)

app.listen(3000, () => {
    console.log('Server is running on port 4000 and on', os.hostname())
})