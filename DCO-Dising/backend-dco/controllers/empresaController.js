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
        res(e)
    }
}