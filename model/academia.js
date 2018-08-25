module.exports = function(){
    var db = require('./../libs/connect_db')();
    var Schema = require('mongoose').Schema;

    var academia = Schema({
        nome: String,
        endereco: String,
        cnpj: Number,
        username: String,
        password: String
    });

    return db.model('academia', academia);
}