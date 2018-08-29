'use strict';
var Academia = require('../model/academia');

exports.findAll = function(req, res) {
    Academia.find()
    .then(dados => {
        res.send(dados);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao recuperar academia"
        });
    });
}

exports.create = (req, res) => {
         console.log(req.body);

        if(!req.body.nome) {
            return res.status(400).send({
                message: "Nome não pode ser vazio!"
            });
        }
        const dados = new Academia({
            nome: req.body.nome, 
            endereco: req.body.endereco,
            cnpj: req.body.cpf,
            username: req.body.username,
            password: req.body.password

        });

        dados.save()
        .then(data => {
            res.send(data);
            // res.redirect('/')
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Algum erro ocorreu ao criar a academia!"
            });
        });
};

exports.findOne = (req, res) => {
    Academia.findById(req.params.academiaId)
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe academia com id " + req.params.academiaId
            });            
        }
        res.send(dados);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Não existe academia com id " + req.params.academiaId
            });                
        }
        return res.status(500).send({
            message: "Erro ao buscar com id " + req.params.academiaId
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.nome) {
        return res.status(400).send({
            message: "Nome não pode estar vazio!"
        });
    }

    Academia.findByIdAndUpdate(req.params.academiaId, {
        nome: req.body.nome, 
        endereco: req.body.endereco,
        cnpj: req.body.cpf,
        username: req.body.username,
        password: req.body.password
    }, {new: true})
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe academia com id " + req.params.academiaId
            });
        }
        res.send(dados);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Não existe academia com id " + req.params.academiaId
            });                
        }
        return res.status(500).send({
            message: "Erro ao atualizar com o id " + req.params.academiaId
        });
    });
};

exports.delete = (req, res) => {
    Academia.findByIdAndRemove(req.params.academiaId)
    .then(dados => {
        if(!dados) {
            return res.status(404).send({
                message: "Não existe academia com id " + req.params.academiaId
            });
        }
        res.send({message: "Academia deletada com sucesso!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Não existe academia com id  " + req.params.academiaId
            });                
        }
        return res.status(500).send({
            message: "Não foi possivel excluir com id " + req.params.academiaId
        });
    });
};