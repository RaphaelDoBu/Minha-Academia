var express = require('express');
var router = express.Router();
var repository = require('../repository/academia_repository');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
