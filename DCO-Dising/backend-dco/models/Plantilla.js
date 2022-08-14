const moongose = require('mongoose');

const PlantillaSchema = moongose.Schema({
    nombre : {
        type:String,
        require:true
    },
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
    fechaCreacion : {
        type:Date,
        default:Date.now()
    }
});

module.exports = moongose.model('Plantilla',PlantillaSchema);