const Plan = require("../models/Plan");
const Usuario = require("../models/Usuario");


//login admin
exports.login = async (req, res) => {
    const { correo, contrasena } = req.body
    try {
        let usuario = await Usuario.find({ "correo": correo})
        if (usuario[0]) {
            if(usuario[0].contrasenia==contrasena){
                res.send({"mensaje":"contraseña correcta","usuario":usuario[0],acceso:1});
            }else{
                res.send({"mensaje":"contraseña incorrecta",acceso:0});
            }
        } else {
            res.send({"mensaje":"usuario no encontrado",acceso:0});
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

//creación de admin
exports.crear = async (req,res)=>{
    try{
        let usuario;
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch(error){
        console.log(error);
        res.send('Hubo un error')
    }
}