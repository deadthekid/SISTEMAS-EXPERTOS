const mongoose = require('mongoose');

const PlanSchema = mongoose.Schema({
    nombre : {
        type:String,
        require:true
    },
    descripcion : {
        type:String,
        require:true
    },
    maxArchivos : {
        type:Number,
        require:true
    },
    maxPaginas : {
        type:Number,
        require:true
    },
    ePersonalizados : {
        type:Boolean,
        require:true
    },
    comision : {
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('Plan', PlanSchema);