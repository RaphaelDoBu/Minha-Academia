'use strict'

let mongoose = require('mongoose')

const server = 'ds229835.mlab.com:29835'
const database = 'db-minha-academima'
const user = 'user-test'
const password = 'user123';

var db;

module.exports = function(){

    if(!db){
        // db = mongoose.connect(`mongodb://<${user}>:<${password}>@${server}/${database}`, { useNewUrlParser: true })
        mongoose.connect('mongodb://localhost:27017/minha-academia', { useNewUrlParser: true });

    }

    return db;

}