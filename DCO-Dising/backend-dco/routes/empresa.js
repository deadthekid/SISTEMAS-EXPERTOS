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

//actualizarInfo
//router.post(bodega.single('file'),'/actualizarInfo',empresaController.actualizarInfo )

router.post('/actualizarInfo',empresaController.actualizarInfo)


//subida de archivos

router.get('/rellenarInfo/:id',empresaController.rellenarInfo)

router.post('/actualizarInfo', empresaController.actualizarInfo);
router.get('/logo/:id',empresaController.logo)
router.post('/aggCategoria',empresaController.aggCategoria)
router.get('/getCategorias/:id',empresaController.getCategorias)
router.put('/updCategorias',empresaController.updCategorias)
router.delete('/delCategorias',empresaController.delCategorias)

module.exports=router