var express = require('express');
var router = express.Router();

const academia = require('../controllers/academia.controller');

/**
 * @swagger
 * /api/academia:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/', academia.findAll)

router.post('/', academia.create)

router.get('/:academiaId', academia.findOne)

router.put('/:academiaId', academia.update)

router.delete('/:academiaId', academia.delete)

module.exports = router;
