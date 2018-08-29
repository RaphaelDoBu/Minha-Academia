var express = require('express');
var router = express.Router();
var cliente = require('../controllers/authenticate.controller');


router.post('/', cliente.autentica);



module.exports = router;
