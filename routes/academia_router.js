var express = require('express');
var router = express.Router();

const academia = require('../controllers/academia.controller');

/**
 * @swagger
 * /academia:
 *   get:
 *     tags:
 *       - Academia
 *     description: Retornar todas as academias
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Todos as academias cadastradas
 *         schema:
 *            $ref: '#/definitions/academia'
 *             
 */
router.get('/', academia.findAll)

/**
 * @swagger
 * /academia:
 *   post:
 *     tags:
 *       - Academia
 *     description: Criar uma academia
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
 *             nome:
 *               type: string
 *             endereco:
 *               type: string
 *             cnpj:
 *               type: number
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *      201:
 *       description: Criado
 *       schema:
 *            $ref: '#/definitions/academia'
 */
router.post('/', academia.create)

/**
 * @swagger
 * /academia/{academiaId}:
 *   get:
 *     tags:    
 *       - Academia
 *     description: Buscar uma academia
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: academiaId
 *         description: Id da academia
 *         in: path
 *         schema:
 *           type: number
 *           required: true
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Academia buscada
 *         schema:
 *            $ref: '#/definitions/academia'
 */
router.get('/:academiaId', academia.findOne)

/**
 * @swagger
 * /academia/{academiaId}:
 *   put:
 *     tags:    
 *       - Academia
 *     description: Buscar uma academia
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: academiaId
 *         description: Id da academia
 *         in: path
 *         schema:
 *           type: number
 *           required: true
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Academia atualizada
 *         schema:
 *            $ref: '#/definitions/academia'
 */
router.put('/:academiaId', academia.update)

/**
 * @swagger
 * /academia/{academiaId}:
 *   delete:
 *     tags:    
 *       - Academia
 *     description: Deletar uma academia
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: academiaId
 *         description: Id da academia
 *         in: path
 *         schema:
 *           type: number
 *           required: true
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Academia deletada
 *         schema:
 *            $ref: '#/definitions/academia'
 */
router.delete('/:academiaId', academia.delete)




module.exports = router;

/**
 * @swagger
 * definition:
 *   academia:
 *     properties:
 *          nome:
 *              type: string
 *          endereco:
 *              type: string
 *          cnpj:
 *              type: number
 *          username:
 *              type: string
 *          password:
 *              type: string
 */