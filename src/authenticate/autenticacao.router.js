var express = require('express');
var router = express.Router();
var authenticate = require('../authenticate/authenticate.controller');


/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Autenticacao
 *     description: Fazer login da academia
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
 *       description: Logado
 *       schema:
 *            $ref: '#/definitions/autenticacao'
 */
router.post('/login', authenticate.loginUser);


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