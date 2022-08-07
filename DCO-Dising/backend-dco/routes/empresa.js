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
router.post('/subirArchivo',empresaController.subirArchivo)
router.get('/listaImagenes/:id',empresaController.listaImagenes)
router.get('/listaVideos/:id',empresaController.listaVideos)
router.get('/listaOtrosArchivos/:id',empresaController.listaOtrosArchivos)
router.get('/detallesArchivos/:id',empresaController.detallesArchivos)
router.post('/actualizarArchivo/:id',empresaController.actualizarArchivo)
router.delete('/eliminarArchivo',empresaController.eliminarArchivo)
module.exports=router