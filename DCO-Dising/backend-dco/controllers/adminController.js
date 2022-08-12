const Usuario = require("../models/Usuario");


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

//creación de admin
exports.crear = async (req, res) => {
    try {
        let usuario;
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
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