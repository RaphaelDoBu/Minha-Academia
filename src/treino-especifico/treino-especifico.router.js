var express = require('express');
var router = express.Router();
var treino = require('../treino-especifico/treino-especifico.controller');


router.get('/', treino.findAll);

router.get('/cliente/:clienteId', treino.findAllByCliente);

router.post('/cliente/:clienteId', treino.createTreino);

// router.put('/cliente/:clienteId', treino.deleteTreino)

router.delete('/:treinoId/cliente/:clienteId',  treino.deleteTreino)


module.exports = router;
