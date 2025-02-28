const express = require("express");
const app = express();
const port = 3000;

let produtos = ["Notebook", "Mouse", "Teclado"];

app.use(express.json());

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.post("/produtos", (req, res) => {
    produtos.push(req.body.nome);
    res.json({ mensagem: "Produto adicionado!" });
});

app.delete("/produtos/:id", (req, res) => {
    produtos.splice(req.params.id, 1);
    res.json({ mensagem: "Produto removido!" });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
