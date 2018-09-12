'use strict';
var Cliente = require('../cliente/cliente');
var Treino = require('../treino-especifico/treino-especifico');


exports.findAll = function(req, res) {
    Treino.find()
    .then(dados => {
        res.send(dados);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao recuperar os treinos"
        });
    });
}

exports.findAllByClienteTreino = function(req, res) {
    Treino.find({ cliente:  req.params.clienteId })
    .then(dados => {
        res.send(dados);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao recuperar os treinos"
        });
    });
}


exports.createTreino = (req, res) => {
    if(!req.body.exercicio) {
        return res.status(400).send({
            message: "Exercicio não pode ser vazio!"
        });
    }
    Cliente.findById(req.params.clienteId)
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });            
        }
        const treino = new Treino({
            dia: req.body.dia, 
            exercicio: req.body.exercicio
        });
        dados.treinos.push(treino);
        dados.save();
        treino.save();
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

exports.deleteTreino = (req, res) => {
    Cliente.findById(req.params.clienteId)
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe cliente com id " + req.params.clienteId
            });            
        }
        dados.treinos.remove(req.params.treinoId);
        dados.save();
        Treino.findByIdAndRemove(req.params.treinoId).exec();
        res.send(dados);
    }).catch(err => {
        console.log(err)
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