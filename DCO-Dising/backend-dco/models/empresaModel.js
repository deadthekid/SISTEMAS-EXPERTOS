const mongoose = require('mongoose')

const empresa = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    bancoMultimedia: {
        type: []
    },
    pagina: {
        type: []
    },
    productos: {
        type: []
    },
})

module.exports= mongoose.model('empresa',empresa)