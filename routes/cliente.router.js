var express = require('express');
var router = express.Router();
var cliente = require('../controllers/cliente.controller');

const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware);

/**
 * @swagger
 * /cliente:
 *   get:
 *     tags:
 *       - Cliente
 *     description: Retornar todas os clientes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         content: 
 *            -application/json:
 *         description: Todos os clientes cadastrados
 *         schema:
 *            $ref: '#/definitions/cliente'
 *             
 */
router.get('/', cliente.findAll)

/**
 * @swagger
 * /cliente:
 *   post:
 *     tags:
 *       - Cliente
 *     description: Criar um cliente
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
 *             cpf:
 *               type: number
 *             dataNascimento:
 *               type: date
 *             peso:
 *               type: string
 *             foco:
 *               type: string
 *     responses:
 *      201:
 *       description: Criado
 *       schema:
 *            $ref: '#/definitions/cliente'
 */
router.post('/', cliente.create)

/**
 * @swagger
 * /cliente/{clienteId}:
 *   get:
 *     tags:    
 *       - Cliente
 *     description: Buscar um cliente
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
 *         description: Cliente buscado
 *         schema:
 *            $ref: '#/definitions/cliente'
 */
router.get('/:clienteId', cliente.findOne)

/**
 * @swagger
 * /cliente/{clienteId}:
 *   put:
 *     tags:    
 *       - Cliente
 *     description: Atualizar um cliente
 *     consumes:
 *       - application/json
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
 *         description: Cliente atualizado
 *         schema:
 *            $ref: '#/definitions/cliente'
 */
router.put('/:clienteId', cliente.update)

/**
 * @swagger
 * /cliente/{clienteId}:
 *  delete:
 *     tags:    
 *       - Cliente
 *     description: Deletar um cliente
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
 *         description: Cliente deletado
 *         schema:
 *            $ref: '#/definitions/cliente'
 */
router.delete('/:clienteId', cliente.delete)

module.exports = router;

/**
 * @swagger
 * definition:
 *   cliente:
 *     properties:
 *          nome:
 *              type: string
 *          endereco:
 *              type: string
 *          cpf:
 *              type: number
 *          peso:
 *              type: string
 *          dataNascimento:
 *              type: date
 *          foco:
 *              type: string
 */