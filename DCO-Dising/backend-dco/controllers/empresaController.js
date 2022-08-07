const Empresa = require('../models/empresaModel');
const Archivo = require('../models/archivoModel')

exports.agregar = async (req, res) => {
    try {
        let empresa;

        empresa = new Empresa(req.body);

        await empresa.save();
        res.send(empresa);
    } catch (e) {

        res.send(e)
    }
}

exports.obtener = async (req, res) => {
    try {
        let empresa = await Empresa.find({ 'correo': req.params.id }, { "correo": 1 })

        res.send(empresa)
    } catch (e) {

        res.send(e)
    }
}

exports.login = async (req, res) => {
    const { correo, contrasena } = req.body
    try {
        let empresa = await Empresa.find({ "correo": correo, "contrasena": contrasena }, { "correo": 1, "contrasena": 1 })
        if (empresa[0]) {

            res.send(empresa)
        } else {

            res.send(false)
        }
        //res.send(empresa)
    } catch (e) {

        res.send(e)
    }
}

exports.actualizarInfo = async (req, res) => {
    const { body } = req
    let empresa

    try {
        empresa = await Empresa.findByIdAndUpdate({ _id: body.idEmpresa }, {
            'nombre': body.nombre,
            'correo': body.correo,
            'descripcion': body.descripcion,
            'contrasena': body.contrasena,
            'logo': body.logo
        }, { new: true })

        res.send(empresa)
    } catch (e) {
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
exports.logo = async (req, res) => {
    const id = req.params.id

    let logo = await Empresa.find({ "_id": id }, { "logo": 1 })
    res.send(logo)
    res.end()
}

exports.aggCategoria = async (req, res) => {
    const { idEmpresa, categoria } = req.body
    let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })

    let categorias = empresa[0].categorias
    categorias.push(categoria)

    empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'categorias': categorias }, { new: true })
    res.send(empresa)
    res.end()
}

exports.getCategorias = async (req, res) => {
    const idEmpresa = req.params.id
    let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })
    res.send(empresa)
    res.end()
}
exports.updCategorias = async (req, res) => {
    const { categoria, idEmpresa, seleccionado } = req.body
    let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })
    let categorias = empresa[0].categorias
    let indice = categorias.indexOf(seleccionado)
    categorias.splice(indice, 1)
    categorias.push(categoria)

    empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'categorias': categorias }, { new: true })
    res.send(empresa)
    res.end()
}
exports.delCategorias = async (req, res) => {
    const { idEmpresa, categoria } = req.query

    let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })
    let categorias = empresa[0].categorias
    let indice = categorias.indexOf(categoria)
    categorias.splice(indice, 1)
    
    empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'categorias': categorias }, { new: true })
    res.send(empresa)
    res.end()
}
exports.subirArchivo = async (req, res) => {
    const { idEmpresa } = req.body
    const archivo = new Archivo(req.body)
    
    archivo.save()
    let empresa = await Empresa.find({ '_id': idEmpresa }, { 'bancoMultimedia': 1 })
    let bancoMultimedia = empresa[0].bancoMultimedia

    bancoMultimedia.push(archivo._id)

    empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'bancoMultimedia': bancoMultimedia }, { new: true })


    res.send(empresa)
    res.end()
}
exports.listaImagenes = async (req, res) => {
    const idEmpresa = req.params.id
    const archivos = await Archivo.find({ 'idEmpresa': idEmpresa })
    const listaImagenes = []
    archivos.forEach(archivo => {
        if (archivo.tipo == 'apng' || archivo.tipo == 'gif' || archivo.tipo == 'ico' || archivo.tipo == 'jpeg' || archivo.tipo == 'png' || archivo.tipo == 'svg') {
            listaImagenes.push(archivo)
            
        }
    });
    
    res.send(listaImagenes)
    res.end()
}
exports.listaVideos = async (req, res) => {
    const idEmpresa = req.params.id
    const archivos = await Archivo.find({ 'idEmpresa': idEmpresa })
    const listaVideos = []
    archivos.forEach(archivo => {
        if (archivo.tipo == 'mp4' || archivo.tipo == 'mov' || archivo.tipo == 'wmv' || archivo.tipo == 'avi' || archivo.tipo == 'mkv' || archivo.tipo == 'webm') {
            listaVideos.push(archivo)
        }
    });
    
    res.send(listaVideos)
    res.end()
}