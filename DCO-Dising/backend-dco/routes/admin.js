//ruta para administracion
const express = require('express')
const router = express.Router()
const adminController= require('../controllers/adminController')


router.post('/login/',adminController.login);
router.post('/nuevoPlan/',adminController.nuevoPlan);
router.get('/planes/',adminController.listarPlanes);
router.get('/plan/:id',adminController.obtenerPlan);
router.put('/plan/actualizar/',adminController.actualizarPlan);
router.post('/nuevaPlantilla',adminController.registroPlantilla);
router.get('/plantillas/',adminController.listarPlantillas);
router.get('/plantilla/:id',adminController.obtenerPlantilla);
router.get('/seguridad/:id',adminController.seguridad);
router.put('/plantilla/actualizar/',adminController.actualizarPlantilla);


//Creacion de admins
router.post('/crearAdmin/',adminController.crear);
module.exports=router