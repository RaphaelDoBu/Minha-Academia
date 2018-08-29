'use strict'
let mongoose = require('mongoose')

// const server = 'ds229835.mlab.com:29835'
// const database = 'db-minha-academima'
// const user = 'user-test'
// const password = 'user123';

// mongoose.createConnection('mongodb://user-test:user123@ds229835.mlab.com:29835/db-minha-academima'
//                             , { useNewUrlParser: true })

mongoose.connect('mongodb://localhost:27017/minha-academia', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var Cliente = new Schema({
    nome: String,
    endereco: String,
    cpf: Number,
    peso: String,
    dataNascimento: Date,
    foco: String
    // academias:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Academia',

    // }]
});

var ClienteDados = mongoose.model('Cliente', Cliente);
module.exports= ClienteDados;
