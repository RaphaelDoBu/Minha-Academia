var express = require('express');
var router = express.Router();
var cliente = require('../controllers/cliente.controller');

router.get('/', cliente.findAll)

router.post('/', cliente.create)

router.get('/:clienteId', cliente.findOne)

router.put('/:clienteId', cliente.update)

router.delete('/:clienteId', cliente.delete)

module.exports = router;
