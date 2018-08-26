// var db = require('./../libs/connect_db')();

var mongoose = require('mongoose');
mongoose.connect('mongodb:localhost:27017/minha-academia', { useNewUrlParser: true });

var Schema = mongoose.Schema;
    
var Cliente = new Schema({
    nome: String,
    endereco: String,
    cpf: Number,
    peso: String,
    dataNascimento: Date,
    foco: String
});

var ClienteDados = mongoose.model('Cliente', Cliente);
module.exports= ClienteDados;
