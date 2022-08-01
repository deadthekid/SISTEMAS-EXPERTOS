const express = require('express');
const conectarDB = require('./config/db');

//Creamos el servidor
const app = express();

//Conectamos a la DB
conectarDB();

app.use(express.json());

app.use('/api/usuarios',require('./routes/usuario'));

app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
})
