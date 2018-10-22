'use strict'
let mongoose = require('mongoose')

// ========   Dados para o Mlab ==========
// const server = 'ds229835.mlab.com:29835'
// const database = 'db-minha-academima'
// const user = 'user-test'
// const password = 'user123';

// mongoose.createConnection('mongodb://user-test:user123@ds229835.mlab.com:29835/db-minha-academima'
//                             , { useNewUrlParser: true })

mongoose.connect('mongodb://localhost:27017/minha-academia', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var Cliente = new Schema({
    nome:  {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    estado:  {
        type: String,
        required: true
    },
    cidade:  {
        type: String,
        required: true
    },
    bairro:  {
        type: String,
        required: true
    },
    rua:  {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    dataNascimento:  {
        type: Date,
        required: true
    },
    foco: {
        type: String,
        required: true
    },
    academia:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Academia'
    },
    treinos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Treino',

    }]
});

var ClienteDados = mongoose.model('Cliente', Cliente);
module.exports= ClienteDados;
