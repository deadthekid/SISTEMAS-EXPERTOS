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
    const { files, body } = req
    let empresa
    if (files.uploads) {
        console.log(files.uploads[0].path)

        console.log("antes del cambio", body)
        console.log("antes del cambio del path de logo", body.logo)
        body.logo = files.uploads[0].path
        console.log("luego del cambio del path de logo", body.logo)
        console.log(body)

        const resultado=Empresa.updateOne({ _id: body.idEmpresa }, {
            
                nombre: 'hola',
                correo: 'jorge@hotmail.com',
                descripcion: 'probando actualizacion de la informacion',
                contrasena: 'probando123'
            
        })
        console.log(resultado)

        const probando= await Empresa.findByIdAndUpdate({_id:body.idEmpresa},{
            'nombre': body.nombre,
            'correo': body.correo,
            'descripcion': body.descripcion,
            'contrasena': body.contrasena,
            'logo': body.logo
        },{new: true})
        console.log(probando)

    } else {
        const resultado = Empresa().update({ '_id': body.idEmpresa }, {
            'nombre': body.nombre,
            'correo': body.correo,
            'descripcion': body.descripcion,
            'contrasena': body.contrasena
        })
        console.log(resultado)
    }


    res.end()
}