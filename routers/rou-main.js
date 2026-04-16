const express = require('express')
const router = express.Router()

const con_main = require('../controllers/con-main')

router.get('/', con_main.index_get)
router.use('/choice', con_main.choice_get)

module.exports = router