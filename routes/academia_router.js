var express = require('express');
var router = express.Router();

const academia = require('../controllers/academia.controller');


router.get('/', academia.findAll)

router.post('/', academia.create)

router.get('/:academiaId', academia.findOne)

router.put('/:academiaId', academia.update)

router.delete('/:academiaId', academia.delete)

module.exports = router;
