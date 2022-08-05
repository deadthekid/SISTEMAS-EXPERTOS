const express = require('express');
var bodyParser = require('body-parser');
const conectarDB = require('./config/db');
const cors= require("cors");
const path = require('path');
const multipart = require('connect-multiparty'); 
//Creamos el servidor
const app = express();

//Conectamos a la DB
conectarDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({
    limit: '200mb',
    extended:true}
    ));
app.use(cors())

//rutas
app.use('/api/usuarios',require('./routes/usuario'));
app.use('/api/productos',require('./routes/producto'));


app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
});



 