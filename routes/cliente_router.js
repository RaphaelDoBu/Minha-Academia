var express = require('express');
var router = express.Router();
var cliente = require('../controllers/cliente.controller');

const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware);


router.get('/', cliente.findAll)

// router.get('/test', (req, res) =>{
//     res.send({user: req.userId})
// })

router.post('/', cliente.create)

router.get('/:clienteId', cliente.findOne)

router.put('/:clienteId', cliente.update)

router.delete('/:clienteId', cliente.delete)

module.exports = router;
