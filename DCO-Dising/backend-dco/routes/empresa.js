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
const multipart = require('connect-multiparty'); 
const multipartMiddleware = multipart({  
    uploadDir: './uploads'
});
router.post('/subirArchivo', multipartMiddleware, empresaController.actualizarInfo);





module.exports=router