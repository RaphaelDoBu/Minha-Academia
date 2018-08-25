var express = require('express');
var router = express.Router();
var model = require('../model/academia')();

router.get('/academia', function(req, res) {
  model.find(null, function(err, academia){
    if(err){
      throw err;
    }
    res.render('index', { title: 'Express' });
  })
});

router.post('/academia', function(req, res, next){
  var body = req.body;
  model.create(body, function(err, academia){
    if(err){
      throw err;
    }

    res.redirect('/');
  })
})

module.exports = router;
