var express = require('express');
var router = express.Router();
var repository = require('../repository/academia_repository');

router.get('/', function(req, res) {
  res.send('respond with a resourcesaaas');

});

router.post('/', function(req, res, next){
  var body = req.body;
  console.log("aaaa")
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
