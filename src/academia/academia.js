'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// ========   Dados para o Mlab ==========
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
  
var Academia = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco:  {
        type: String,
        required: true
    },
    cnpj:  {
        type: Number,
        required: true
    },
    username:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    role: {
        type: String,
        // required: true,
        // enum: ["ADMIN", "USER"],
        default: "USER"
    },
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
