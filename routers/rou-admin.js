const express = require('express')
const router = express.Router()

const con_admin = require('../controllers/con-admin')

router.get('/upload', con_admin.upload_get)
router.post('/upload', con_admin.upload_post)

module.exports = router