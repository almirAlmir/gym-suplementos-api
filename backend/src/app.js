const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express(0);

app.use(express.json())

app.use('/produtos', productRoutes);

app.get('/', (req, res) => {
    res.send('API de Produtos para Academia funcionando!')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});