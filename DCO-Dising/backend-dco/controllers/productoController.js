const Producto = require("../models/Producto")
const Empresa = require("../models/empresaModel")



exports.subirProducto = async (req, res) => {
    try {
        let producto;
        let idEmpresa = req.body.empresa
        producto = new Producto(req.body);

        //console.log("producto: ", producto)
        let productos
        let empresa = await Empresa.find({ '_id': idEmpresa }, { "productos": 1 })
        productos = empresa[0].productos
        productos.push(producto._id)
        
        empresa = await Empresa.findByIdAndUpdate({ _id: idEmpresa }, { 'productos': productos }, { new: true })
        console.log(empresa)

        await producto.save();
        res.send(producto);
        res.end()
    } catch (e) {
        console.log(e);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        req.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {

        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {
        console.log(error);
        req.status(500).send('Hubo un error');
    }
}