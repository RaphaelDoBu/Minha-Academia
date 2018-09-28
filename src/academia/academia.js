'use strict'
var mongoose = require('mongoose')

//Dados para o Mlab
// const server = 'ds229835.mlab.com:29835'
// const database = 'db-minha-academima'
// const user = 'user-test'
// const password = 'user123';

// mongoose.createConnection('mongodb://user-test:user123@ds229835.mlab.com:29835/db-minha-academima'
//                             , { useNewUrlParser: true })

mongoose.connect('mongodb://localhost:27017/minha-academia', { useNewUrlParser: true },  (err, db) => {
    if (err) {
         console.log('err', err);
    }
    else { console.log('Connected', db)
        }
    }
);

var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
  
var Academia = new Schema({
    nome: String,
    endereco: String,
    cnpj: Number,
    username: String,
    password: String,
    clientes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

Academia.methods.generateHash = function(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(10), null);
};

var AcademiaDados = mongoose.model('Academia', Academia);
module.exports= AcademiaDados;
