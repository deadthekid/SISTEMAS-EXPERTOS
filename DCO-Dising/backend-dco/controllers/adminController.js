const Plan = require("../models/Plan");
const Usuario = require("../models/Usuario");
const Plantilla = require('../models/Plantilla');


//login admin
exports.login = async (req, res) => {
    const { correo, contrasena } = req.body
    try {
        let usuario = await Usuario.find({ "correo": correo, "contrasenia": contrasena }, { "tipoUsuario": 1 })
        if (usuario[0]) {
            if (usuario[0].tipoUsuario == "Administrador") {
                res.send(usuario)
            } else {
                res.send(false)
            }
        } else {
            res.send(null)
        }
        //res.send(empresa)
    } catch (e) {
        res.send(e)
    }
}

//crear Plan
exports.nuevoPlan = async (req, res) => {
    try {
        let plan;
        plan = new Plan(req.body);

        await plan.save();
        res.send(plan);
    } catch (error) {
        res.send(error);
    }
}

//obtener lista de planes
exports.listarPlanes = async (req, res) => {
    try {
        let planes = await Plan.find();
        if(planes[0]){
            res.send({mensaje:"planes encontrados",listaPlanes:planes,acceso:1});
        }else{
            res.send({mensaje:"no se encontraron planes",acceso:0});
        }
    } catch (error) {
        res.send(error);
    }
}

//obtener detalles plan
exports.obtenerPlan = async (req, res) => {
    try {
        let plan = await Plan.findById(req.params.id);
        if(plan){
            res.send({mensaje:"plan encontrado",plan:plan,acceso:1});
        }else{
            res.send({mensaje:"no se encontraro el plan",acceso:0});
        }
    } catch (error) {
        res.send(error);
    }
}

//actualizar datos de plan
exports.actualizarPlan = async (req, res) => {
    try {
        const {id, nombre, descripcion, maxPaginas, maxArchivos, ePersonalizados, comision} = req.body
        let plan = await Plan.findById(id);
        if(plan){
            plan = await Plan.findOneAndUpdate({ _id : id }, {
                'nombre' : nombre,
                'descripcion' : descripcion,
                'maxPaginas' : maxPaginas,
                'maxArchivos' : maxArchivos,
                'ePersonalizados' : ePersonalizados,
                'comision' : comision
            }, { new:true } );
            res.send({mensaje:"plan actualizado",acceso:1});
        }else{
            res.send({mensaje:"no se encontro el plan",acceso:0});
        }
    } catch (error) {
        res.send(error);
    }
}

//registro plantilla
exports.registroPlantilla = async (req, res) => {
    try {
        let plantilla;
        plantilla = new Plantilla(req.body);

        await plantilla.save();
        res.send(plantilla);
    } catch (error) {
        res.send(error);
    }
}

//listar plantillas
exports.listarPlantillas = async (req, res) => {
    try {
        let plantillas = await Plantilla.find();
        if(plantillas[0]){
            res.send({mensaje:"plantillas encontradas",listaPlantillas:plantillas,acceso:1});
        }else{
            res.send({mensaje:"no se encontraron plantillas",acceso:0});
        }
    } catch (error) {
        res.send(error);
    }
}

//obtener detalles plan
exports.obtenerPlantilla = async (req, res) => {
    try {
        let plantilla = await Plantilla.findById(req.params.id);
        if(plantilla){
            res.send({mensaje:"plantilla encontrada",plantilla:plantilla,acceso:1});
        }else{
            res.send({mensaje:"no se encontraro la plantilla",acceso:0});
        }
    } catch (error) {
        res.send(error);
    }
}

//actualizar datos de plantilla
exports.actualizarPlantilla = async (req, res) => {
    try {
        const {id, nombre, html, css, javascript} = req.body
        let plantilla = await Plantilla.findById(id);
        if(plantilla){
            plantilla = await Plantilla.findOneAndUpdate({ _id : id }, {
                'nombre' : nombre,
                'html' : html,
                'css' : css,
                'javascript' : javascript,
            }, { new:true } );
            res.send({mensaje:"plantilla actualizada",acceso:1});
        }else{
            res.send({mensaje:"no se encontro la plantilla",acceso:0});
        }
    } catch (error) {
        res.send(error);
    }
}

//creación de admin
exports.crear = async (req, res) => {
    try {
        let usuario;
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.send('Hubo un error')
    }
}
exports.verificar = async (req, res) => {
    try {
        let usuario = await Usuario.findById({ 'id': req.params.id })
        console.log(usuario)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}

exports.seguridad = async (req, res) => {
    const idUsuario = req.params.id
    try {
        let usuario = await Usuario.find({ '_id': idUsuario },{'tipoUsuario':1})
        if(usuario[0]){
            if(usuario[0].tipoUsuario=="Administrador"){
                res.send(true)
            }else{
                res.send(false)
            }
        }else{
            res.send(false)
        }
        res.end()
    } catch (e) {
        console.log(e)
        res.send(e)
        res.end()
    }
}