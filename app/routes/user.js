const { Router } = require('express');
const express= require('express');
const controller = require('../controllers/user')
const router = express.Router()
const path = 'user'

//Ruta: /user GET
router.get(
    `/${path}`,
    controller.getData
)
//RUta /user POST, enviar datos
router.post(
    '/user',
    controller.insertData
)

//Ruta /user UPDATE
router.put(
    `/;id`,
    controller.updateSingle
)

module.exports = router