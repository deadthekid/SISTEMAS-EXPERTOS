var express = require('express');
var bodyParser = require('body-parser');
var conectarDB = require('./config/db');
var cors = require('cors')

var app = express();


//Middleware


app.use(express.static('public'));//Se usa para ejecutar funciones middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())




conectarDB()
app.use('/empresa/',require('./routes/empresa'))


app.listen(8888,function(){
    console.log('Se levanto el servidor');
});