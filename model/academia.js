// var db = require('./../libs/connect_db')();

var mongoose = require('mongoose');
mongoose.connect('mongodb:localhost:27017/minha-academia', { useNewUrlParser: true });

var Schema = mongoose.Schema;
    
var Academia = new Schema({
    nome: String,
    endereco: String,
    cnpj: Number,
    username: String,
    password: String
});

var teste = mongoose.model('Academia', Academia);
module.exports= teste;
