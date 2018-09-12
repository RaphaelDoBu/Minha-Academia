'use strict';
var Cliente = require('../cliente/cliente');
var Academia = require('../academia/academia');
var academia = require('../academia/academia.controller')

exports.findAll = function(req, res) {
    console.log(req.userId)
    Cliente.find({academia: req.userId})
    .then(dados => {
        console.log(dados)

        res.send(dados);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao recuperar cliente"
        });
    });
}

exports.create = (req, res) => {
        if(!req.body.nome) {
            return res.status(400).send({
                message: "Nome não pode ser vazio!"
            });
        }
        const dados = new Cliente({
            nome: req.body.nome, 
            endereco: req.body.endereco,
            cpf: req.body.cpf,
            peso: req.body.peso,
            dataNascimento: req.body.dataNascimento,
            foco: req.body.foco,
            academia: req.userId
        });
        academia.findByAcademiaIdSaveCliente(req.userId, dados);
        dados.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Algum erro ocorreu ao criar a cliente!"
            });
        });
};


exports.findOne = (req, res) => {
    console.log(req.userId)
    Cliente.find({ "_id": req.params.clienteId, academia: req.userId})
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });            
        }
        res.send(dados);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });                
        }
        return res.status(500).send({
            message: "Erro ao buscar com id " + req.params.clienteId
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.nome) {
        return res.status(400).send({
            message: "Nome não pode estar vazio!"
        });
    }

    Cliente.findByIdAndUpdate(req.params.clienteId, {
        nome: req.body.nome, 
        endereco: req.body.endereco,
        cpf: req.body.cpf,
        peso: req.body.peso,
        dataNascimento: req.body.dataNascimento,
        foco: req.body.foco
    }, {new: true})
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });
        }
        res.send(dados);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });                
        }
        return res.status(500).send({
            message: "Erro ao atualizar com o id " + req.params.clienteId
        });
    });
};

exports.delete = (req, res) => {
    Cliente.findByIdAndRemove(req.params.clienteId)
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });
        }
        academia.findByAcademiaIdDeleteCliente(req.userId, dados);
        res.send({message: "Cliente deletado com sucesso!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Não existe cliente com id  " + req.params.clienteId
            });                
        }
        return res.status(500).send({
            message: "Não foi possivel excluir com id " + req.params.clienteId
        });
    });
};