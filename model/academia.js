// var db = require('./../libs/connect_db')();

var mongoose = require('mongoose');
mongoose.connect('mongodb:http://127.0.0.1:27017/', { useNewUrlParser: true });

var Schema = mongoose.Schema;
    
var Academia = new Schema({
    nome: String,
    endereco: String,
    cnpj: Number,
    username: String,
    password: String
});

var AcademiaDados = mongoose.model('Academia', Academia);
module.exports= AcademiaDados;
