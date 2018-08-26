'use strict';
var mongoose = require('mongoose')
var Academia = require('./../model/academia');
var Promise = require('promise');


module.exports = new class AcademiaRepository {

    getAll() {
        return Academia.find();
    }

    getById(id) {
        return Academia.findById(id);
    }

    // create = function (res, res){
    //     Academia.create(academia);
    //     res.sendStatus(200);
    // }

    update(id, academia) {

        const updatedAcademia = {
            nome: academia.nome,
            endereco: academia.endereco,
        }

        return Academia.findByIdAndUpdate(id, updatedAcademia, { new: true });
    }

    delete(id) {
        return Academia.findByIdAndRemove(id);
    }

}