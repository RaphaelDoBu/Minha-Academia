var express = require('express');
var router = express.Router();
var academia = require('../controllers/authenticate.controller');


/**
 * @swagger
 * /auth:
 *   post:
 *     tags:
 *       - Autenticacao
 *     description: Autenticar uma academia
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *        - in: body
 *          name: user
 *          schema:
 *           type: object
 *           required:
 *             - nome
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *      201:
 *       description: Criado
 *       schema:
 *            $ref: '#/definitions/autenticacao'
 */
router.post('/', academia.autentica);



module.exports = router;

/**
 * @swagger
 * definition:
 *   autenticacao:
 *     properties:
 *          username:
 *              type: string
 *          password:
 *              type: string
 */