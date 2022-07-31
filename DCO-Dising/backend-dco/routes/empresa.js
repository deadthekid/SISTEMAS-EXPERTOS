//ruta para empresas
const express = require('express')
const router = express.Router()
const empresaController= require('../controllers/empresaController')

//api empresa registro
router.post('/registro/',empresaController.agregar)
router.get('/registro/:id',empresaController.obtener)
router.post('/login/',empresaController.login)
//router.delete('/registro/:id',empresaController.borrar)
//router.put('/registro/',empresaController.actualizar)










module.exports=router