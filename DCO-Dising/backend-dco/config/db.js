const moongosee = require('mongoose')
require('dotenv').config({path: 'variables.env'})

const conectarDB= async ()=>{
    try{
        moongosee.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB conectada")
    }catch(e){
        console.log(error)
        process.exit(1) //se detiene la app
    }
}

module.exports = conectarDB