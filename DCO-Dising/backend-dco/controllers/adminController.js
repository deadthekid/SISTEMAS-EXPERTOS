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

//creación de admin
exports.crear = async (req,res)=>{
    try{
        let usuario;
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}