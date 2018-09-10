'use strict';
var Cliente = require('../cliente/cliente');
var Treino = require('../treino-especifico/treino-especifico');


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
            exercicio: req.body.exercicio,
            cliente: req.params.clienteId
        });
        dados.treinos.push(treino);
        treino.save();
        dados.save();
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