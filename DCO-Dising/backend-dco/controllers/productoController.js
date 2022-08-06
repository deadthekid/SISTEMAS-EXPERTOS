const Producto = require("../models/Producto")



exports.subirProducto = async (req, res) => {
    try {
        let producto;

        producto = new Producto(req.body);

        console.log("producto: ", producto)
        await producto.save();
        res.send(producto);
    } catch (e) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProducto = async (req, res) => {
    try{
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg:'No existe el producto'})
        }

        res.json(producto);

    }catch(error){
        console.log(error);
        req.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async(req,res)=>{
    try{

        const productos = await Producto.find();
        res.json(productos)

    }catch(error){
        console.log(error);
        req.status(500).send('Hubo un error');
    }
}