var express = require('express');
var router = express.Router();
var treino = require('../treino-especifico/treino-especifico.controller');

/**
 * @swagger
 * /treino:
 *   get:
 *     tags:
 *       - Treino
 *     description: Retornar todas os treinos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Todos os treinos cadastrados
 *         schema:
 *            $ref: '#/definitions/treino'
 *             
 */
router.get('/', treino.findAll);

/**
 * @swagger
 * /treino/cliente/{clienteId}:
 *   get:
 *     tags:    
 *       - Treino
 *     description: Buscar treino por id do cliente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: clienteId
 *         description: Id do cliente
 *         in: path
 *         schema:
 *           type: number
 *           required: true
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Treino buscado do cliente
 *         schema:
 *            $ref: '#/definitions/treino'
 */
router.get('/cliente/:clienteId', treino.findAllByCliente);

/**
 * @swagger
 * /treino/cliente/{clienteId}:
 *   post:
 *     tags:
 *       - Treino
 *     description: Criar um treino para cliente
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *        - name: clienteId
 *          description: Id do cliente
 *          in: path
 *          schema:
 *           type: number
 *           required: true
 *        - in: body
 *          name: user
 *          schema:
 *           type: object
 *           required:
 *             - nome
 *           properties:
 *             dia:
 *               type: string
 *             exercicio:
 *               type: string
 *     responses:
 *      201:
 *       description: Treino criado
 *       schema:
 *            $ref: '#/definitions/treino'
 */
router.post('/cliente/:clienteId', treino.createTreino);

/**
 * @swagger
 * /treino/{treinoId}/cliente/{clienteId}:
 *  delete:
 *     tags:    
 *       - Treino
 *     description: Deletar um treino de um cliente por id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: treinoId
 *         description: Id do treino
 *         in: path
 *         schema:
 *           type: number
 *           required: true
 *       - name: clienteId
 *         description: Id do cliente
 *         in: path
 *         schema:
 *           type: number
 *           required: true
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Treino deletado
 *         schema:
 *            $ref: '#/definitions/treino'
 */
router.delete('/:treinoId/cliente/:clienteId',  treino.deleteTreino)


module.exports = router;

/**
 * @swagger
 * definition:
 *   treino:
 *     properties:
 *          dia:
 *              type: string
 *          exercicio:
 *              type: string
 */