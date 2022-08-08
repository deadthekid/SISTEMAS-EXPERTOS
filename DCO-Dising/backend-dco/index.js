const express = require('express');
var bodyParser = require('body-parser');
const conectarDB = require('./config/db');
const cors= require("cors");
const path = require('path');
const multipart = require('connect-multiparty'); 
//Creamos el servidor
const app = express();

//Conectamos a la DB

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
conectarDB()


//Middleware
//Se usa para ejecutar funciones middleware
app.use(bodyParser.urlencoded({
    limit: '200mb',
    extended:true}
    ));
    
//rutas
app.use('/api/usuarios',require('./routes/usuario'));
app.use('/api/productos',require('./routes/producto'));
app.use('/empresa/',require('./routes/empresa'));
app.use('/admin/',require('./routes/admin'));

app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
});



 