var express = require('express');
var router = express.Router();
var academia = require('../controllers/authenticate.controller');


router.post('/', academia.autentica);



module.exports = router;
