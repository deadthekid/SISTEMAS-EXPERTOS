const Empresa = require('../models/empresaModel');
const Archivo = require('../models/archivoModel')
const Producto = require('../models/Producto');
const Plan = require('../models/Plan');
const Venta = require('../models/ventaModel')


exports.agregar = async (req, res) => {
    try {
        let empresa;

        empresa = new Empresa(req.body);
        await empresa.save();
        console.log(empresa)
        res.send(empresa);
    } catch (e) {

        res.send(e)
    }
}

exports.listar = async (req, res) => {
    try {
        let empresas = await Empresa.find();
        if (empresas.length > 0) {
            let planes = await Plan.find();
            empresas.forEach(empresa =>{
                planes.forEach(plan => {
                    if(empresa.plan == plan._id){
                        empresa.plan = plan.nombre
                    }
                });
            });
            res.send({ mensaje: "empresas encontrados", listaEmpresas: empresas, acceso: 1 });
        } else {
            res.send(false);
        }
        res.end()
    } catch (error) {
        console.log(error);
        req.send('Hubo un error');
    }
}

exports.obtenerEmpresa = async (req, res) => {
    try {
        let empresa = await Empresa.findById(req.params.id);
        if (empresa) {
            res.send({ mensaje: "empresa encontrada", empresa: empresa, acceso: 1 });
        } else {
            res.send(false);
        }
        res.end()
    } catch (error) {
        console.log(error);
        req.send('Hubo un error');
    }
}

exports.bloquearEmpresa = async (req, res) => {
    const { id } = req.body;
    try {
        let empresa = await Empresa.findByIdAndUpdate({ _id: id }, {
            'activo': false
        }, { new: true })
        if (empresa) {
            res.send({ mensaje: "empresa bloqueada", empresa: empresa, acceso: 1 });
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
        req.send('Hubo un error');
    }
}

exports.desbloquearEmpresa = async (req, res) => {
    const { id } = req.body;
    try {
        let empresa = await Empresa.findByIdAndUpdate({ _id: id }, {
            'activo': true
        }, { new: true })
        if (empresa) {
            res.send({ mensaje: "empresa desbloqueada", empresa: empresa, acceso: 1 });
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
        res.send(null);
    }
}

exports.eliminarEmpresa = async (req, res) => {
    try {
        let empresa = await Empresa.findByIdAndRemove(req.params.id);
        if (empresa) {
            res.send({ mensaje: "empresa eliminada", empresa: empresa, acceso: 1 });
        } else {
            res.send(false);
        }
        res.end()
    } catch (error) {
        res.send(null)
        res.end()
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
        let empresa = await Empresa.find({ "correo": correo, "contrasena": contrasena }, { "correo": 1, "contrasena": 1, "activo": 1 },)
        if (empresa[0]) {
            res.send(empresa)
        } else {

            res.send(false)
        }
        //res.send(empresa)
    } catch (e) {

        res.send(e)
    }
    res.end()
}
exports.seguridad = async (req, res) => {
    const idEmpresa = req.params.id
    try {
        let empresa = await Empresa.find({ "_id": idEmpresa })
        res.send(true)
        res.end()
    } catch (e) {
        res.send(null)
        res.end()
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
    try {
        const id = req.params.id
        const empresa = await Empresa.findById({ '_id': id })
        res.send(empresa)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.logo = async (req, res) => {
    try {
        const id = req.params.id

        let logo = await Empresa.find({ "_id": id }, { "logo": 1 })
        res.send(logo)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}

exports.aggCategoria = async (req, res) => {
    try {
        const { idEmpresa, categoria } = req.body
        let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })

        let categorias = empresa[0].categorias
        categorias.push(categoria)

        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'categorias': categorias }, { new: true })
        res.send(empresa)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}

exports.getCategorias = async (req, res) => {
    try {
        const idEmpresa = req.params.id
        let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })
        res.send(empresa)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.updCategorias = async (req, res) => {
    try {
        const { categoria, idEmpresa, seleccionado } = req.body
        let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })
        let categorias = empresa[0].categorias
        let indice = categorias.indexOf(seleccionado)
        categorias.splice(indice, 1)
        categorias.push(categoria)

        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'categorias': categorias }, { new: true })
        res.send(empresa)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}

exports.updEstilos = async(req,res)=>{
    try{

        const {idEmpresa, estilo1,estilo2,estilo3} = req.body
        console.log(estilo1)
        let empresa = await Empresa.findById(idEmpresa);
        if(empresa){
            empresa = await Empresa.findOneAndUpdate({ _id:idEmpresa },{
                'estilo1': estilo1,
                'estilo2': estilo2,
                'estilo3': estilo3
            },{ new:true });
            res.send({mensaje:"usuario actualizado",acceso:1});
        }else{
            res.send({mensaje:"no se encontro el usuario",acceso:0});
        }
        
    }catch(error){
        console.log(error);
        req.send('Hubo un error');
    }
}


exports.delCategorias = async (req, res) => {
    try {
        const { idEmpresa, categoria } = req.query

        let empresa = await Empresa.find({ '_id': idEmpresa }, { "categorias": 1 })
        let categorias = empresa[0].categorias
        let indice = categorias.indexOf(categoria)
        categorias.splice(indice, 1)

        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'categorias': categorias }, { new: true })
        res.send(empresa)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.subirArchivo = async (req, res) => {
    try {
        const { idEmpresa } = req.body
        const archivo = new Archivo(req.body)


        let empresa = await Empresa.find({ '_id': idEmpresa }, { 'bancoMultimedia': 1 })
        let bancoMultimedia = empresa[0].bancoMultimedia
        console.log(bancoMultimedia.length)

        archivo.shortcut = bancoMultimedia.length + '-' + archivo.nombre
        archivo.save()
        bancoMultimedia.push(archivo._id)

        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'bancoMultimedia': bancoMultimedia }, { new: true })

        res.send(empresa)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.listaImagenes = async (req, res) => {
    try {
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
    } catch (e) {
        res.send(e)
        res.end()
    }
}



exports.listaVideos = async (req, res) => {
    try {
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
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.listaOtrosArchivos = async (req, res) => {
    try {
        const idEmpresa = req.params.id
        const archivos = await Archivo.find({ 'idEmpresa': idEmpresa })
        const listaOtrosAArchivos = []
        archivos.forEach(archivo => {
            if (!(archivo.tipo == 'mp4' || archivo.tipo == 'mov' || archivo.tipo == 'wmv' || archivo.tipo == 'avi' || archivo.tipo == 'mkv' || archivo.tipo == 'webm' || archivo.tipo == 'apng' || archivo.tipo == 'gif' || archivo.tipo == 'ico' || archivo.tipo == 'jpeg' || archivo.tipo == 'png' || archivo.tipo == 'svg')) {
                listaOtrosAArchivos.push(archivo)
            }
        });

        res.send(listaOtrosAArchivos)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.detallesArchivos = async (req, res) => {
    try {
        const idArchivo = req.params.id
        const archivo = await Archivo.find({ '_id': idArchivo })
        if (archivo.length == 0) {
            res.send(null)
        } else {
            res.send(archivo)
            res.end()
        }
    } catch (e) {
        res.send(e)
        res.end()
    }

}
exports.actualizarArchivo = async (req, res) => {
    try {
        const idArchivo = req.params.id
        const { tipo, nombre, tamano, archivo } = req.body

        let viejo = await Archivo.find({ '_id': idArchivo })
        viejo = await Archivo.findByIdAndUpdate({ _id: idArchivo }, {
            'tipo': tipo,
            'nombre': nombre,
            'tamano': tamano,
            'archivo': archivo
        }, { new: true })
        res.send(viejo)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.eliminarArchivo = async (req, res) => {
    try {
        const { idEmpresa, idArchivo } = req.query

        let empresa = await Empresa.find({ '_id': idEmpresa }, { "bancoMultimedia": 1 })
        let bancoMultimedia = empresa[0].bancoMultimedia
        let indice = bancoMultimedia.indexOf(idArchivo)

        bancoMultimedia.splice(indice, 1)

        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'bancoMultimedia': bancoMultimedia }, { new: true })

        let borrado = await Archivo.remove({ '_id': idArchivo })
        res.send(borrado)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.getProductos = async (req, res) => {
    try {
        const productos = await Producto.find({ 'empresa': req.params.id })
        res.send(productos)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, precio, categoria, descripcion, img, idProducto } = req.body
        let producto = await Producto.findByIdAndUpdate({ _id: idProducto }, {
            'nombre': nombre,
            'precio': precio,
            'categoria': categoria,
            'descripcion': descripcion,
            'img': img
        })
        res.send(producto)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.eliminarProducto = async (req, res) => {
    try {
        const { idProducto, idEmpresa } = req.query
        console.log(idProducto)


        let empresa = await Empresa.find({ '_id': idEmpresa }, { "productos": 1 })
        let productos = empresa[0].productos
        let indice = productos.indexOf(idProducto)

        productos.splice(indice, 1)

        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'productos': productos }, { new: true })

        let producto = await Producto.remove({ '_id': idProducto })

        res.send(producto)
        res.end()
    } catch (e) {
        res.send(e)
        res - end()
    }
}
exports.venta = async (req, res) => {
    try {
        const venta = {
            idProducto: req.body.idProducto,
            idComprador: req.body.idComprador,
            idEmpresa: '',
            nombre: req.body.nombre,
            precio: req.body.precio,
            fecha: Date.now(),
        }
        const producto= await Producto.findById({'_id':req.body.idProducto},{'empresa':1})
        venta.idEmpresa=producto.empresa
        
        const guardar = new Venta(venta)
        guardar.save()
        res.send(guardar)
        res.end()
    } catch (e) {
        res.send(e)
        res.end()
    }
}
exports.historial=async(req,res)=>{
    try{
        let idEmpresa=req.params.id
        const historial= await Venta.find({'idEmpresa':idEmpresa})
        console.log(historial)
        res.send(historial)
    }catch(e){
        res.send(e)
        res.end()
    }
}