var mongoose = require('mongoose');
var db;

module.exports = function(){

    if(!db){
        db = mongoose.createConnection('mongodb://localhost/db-minha-academia')
    }

    return db;

}