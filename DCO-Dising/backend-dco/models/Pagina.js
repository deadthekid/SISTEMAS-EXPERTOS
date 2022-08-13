const moongose = require('mongoose');

const PaginaSchema = moongose.Schema({
    html : {
        type:String,
        require:true
    },
    css : {
        type:String,
        require:true
    },
    javascript : {
        type:String,
        require:false
    },
    empresaId : {
        type:Number,
        require:false
    },
    fechaCreacion : {
        type:Date,
        default:Date.now()
    }
});

module.exports = moongose.model('Pagina',PaginaSchema);