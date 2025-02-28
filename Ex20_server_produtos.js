const express = require("express");
const app = express();
const port = 3000;

// Lista de produtos inicial
let produtos = ["Notebook", "Mouse", "Teclado"];

// Middleware para permitir JSON
app.use(express.json());

// Rota inicial para evitar erro "Cannot GET /"
app.get("/", (req, res) => {
    res.send("API de Produtos - Use /produtos para ver a lista.");
});

// Rota para listar todos os produtos
app.get("/produtos", (req, res) => {
    res.json(produtos);
});

// Rota para adicionar um novo produto
app.post("/produtos", (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: "Nome do produto é obrigatório." });
    }
    produtos.push(nome);
    res.json({ mensagem: "Produto adicionado!", produtos });
});

// Rota para remover um produto por ID (corrigido)
app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id) || id < 0 || id >= produtos.length) {
        return res.status(400).json({ erro: "ID inválido!" });
    }

    produtos.splice(id, 1);
    res.json({ mensagem: "Produto removido!", produtos });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
