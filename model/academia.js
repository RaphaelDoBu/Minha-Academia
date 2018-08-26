'use strict'
var mongoose = require('mongoose')

const server = 'ds229835.mlab.com:29835'
const database = 'db-minha-academima'
const user = 'user-test'
const password = 'user123';

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
    
var Academia = new Schema({
    nome: String,
    endereco: String,
    cnpj: Number,
    username: String,
    password: String
});

var AcademiaDados = mongoose.model('Academia', Academia);
module.exports= AcademiaDados;
