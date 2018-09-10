var express = require('express');
var router = express.Router();
var treino = require('../treino-especifico/treino-especifico.controller');


router.get('/', treino.findAll);


router.post('/cliente/:clienteId', treino.createTreino);

module.exports = router;
