//ruta para administracion
const express = require('express')
const router = express.Router()
const adminController= require('../controllers/adminController')


router.post('/login/',adminController.login);



//Creacion de admins
router.post('/crearAdmin/',adminController.crear);
module.exports=router