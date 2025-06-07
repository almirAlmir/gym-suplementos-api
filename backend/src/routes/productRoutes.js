const express = require('express');
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// Validações para criação de um produto
const validateProductCreation = [
    body('nome').isString().withMessage('Nome deve ser uma string'),
    body('preco').isFloat({ gt: 0 }).withMessage('Preço deve ser um número maior que zero'),
    // Adicione outras validações conforme necessário
    validationMiddleware
];

// Validações para edição de um produto
const validateProductUpdate = [
    body('nome').optional().isString().withMessage('Nome deve ser uma string'),
    body('preco').optional().isFloat({ gt: 0 }).withMessage('Preço deve ser um número maior que zero'),
    // Adicione outras validações conforme necessário
    validationMiddleware
];

// Endpoint para criar um produto
router.post('/', validateProductCreation, productController.createProduct);

// Endpoint para editar um produto (usando o ID como parâmetro)
router.put('/:id', validateProductUpdate, productController.updateProduct);

// Endpoint para buscar todos produtos
router.get('/', productController.getProducts);

// Endpoint para buscar um produto específico pelo ID
router.get('/:id', productController.getProduct);

module.exports = router;