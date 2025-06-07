const db = require('../utils/db');

exports.createProduct = (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = {
        id: db.nextId++,
        nome,
        preco
    };

    db.products.push(novoProduto);
    res.status(201).json(novoProduto);
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    
    const produto = db.products.find(p => p.id === parseInt(id));
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Atualiza os campos enviados na requisição
    if (nome) produto.nome = nome;
    if (preco) produto.preco = preco;
    
    res.json(produto);
};

exports.getProducts = (req, res) => {
    res.json(db.products);
};

exports.getProduct = (req, res) => {
    const { id } = req.params;
    const produto = db.products.find(p => p.id === parseInt(id));
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
};