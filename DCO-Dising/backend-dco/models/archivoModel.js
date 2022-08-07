const mongoose = require('mongoose')

const archivo = mongoose.Schema({
    archivo: {
        type: String
    },
    tipo: {
        type: String
    },
    tamaño: {
        type: Number
    },
    nombre: {
        type: String
    },
    idEmpresa: {
        type: String
    },
})

module.exports = mongoose.model('archivo', archivo)