const Empresa = require('../models/empresaModel');

exports.agregar = async (req, res) => {
    try {
        let empresa;

        empresa = new Empresa(req.body);

        console.log("empresa: ", empresa)
        await empresa.save();
        res.send(empresa);
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

exports.obtener = async (req, res) => {
    try {
        let empresa = await Empresa.find({ 'correo': req.params.id }, { "correo": 1 })
        console.log("empresa: ", empresa)
        res.send(empresa)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

exports.login = async (req, res) => {
    const { correo, contrasena } = req.body
    try {
        let empresa = await Empresa.find({ "correo": correo, "contrasena": contrasena }, { "correo": 1, "contrasena": 1 })
        if (empresa[0]) {
            console.log(true)
            res.send(empresa)
        } else {
            console.log(false)
            res.send(false)
        }
        //res.send(empresa)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

exports.actualizarInfo = async (req, res) => {
    const { body } = req
    let empresa
    
    try{
        empresa = await Empresa.findByIdAndUpdate({ _id: body.idEmpresa }, {
            'nombre': body.nombre,
            'correo': body.correo,
            'descripcion': body.descripcion,
            'contrasena': body.contrasena,
            'logo': body.logo
        }, { new: true })
        console.log(empresa)
        res.send(empresa)
    }catch(e){
        res.send(e)
    }
    res.end()
}

exports.rellenarInfo = async (req, res) => {
    const id = req.params.id
    const empresa = await Empresa.findById({ '_id': id })
    res.send(empresa)
    res.end()
}