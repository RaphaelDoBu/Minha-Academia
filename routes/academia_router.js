var express = require('express');
var router = express.Router();
var repository = require('../repository/academia_repository');

router.get('/', function(req, res) {
  return repository.getAll();

});

router.post('/', function(req, res, next){
  var body = req.body;
  repository.create(body, function(err, academia){
    if(err){
      throw err;
    }

    res.redirect('/');
  })
})

router.get('/:id', function(req, res, next){
  var id = req.params.id;
  repository.findById(id, function(err, academia){
    if(err){
      throw err;
    }

  })
})

module.exports = router;
