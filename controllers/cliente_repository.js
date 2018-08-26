'use strict';
var mongoose = require('mongoose')
var Cliente = require('./../model/cliente');


module.exports = new class ClienteRepository {

    getAll() {
        return Cliente.find();
    }

    getById(id) {
        return Cliente.findById(id);
    }

    create(cliente) {
        return Cliente.create(cliente);
    }

    update(id, cliente) {

        const updatedCliente = {
            nome: cliente.nome,
            endereco: cliente.endereco,
        }

        return Cliente.findByIdAndUpdate(id, updatedCliente, { new: true });
    }

    delete(id) {
        return Cliente.findByIdAndRemove(id);
    }

}