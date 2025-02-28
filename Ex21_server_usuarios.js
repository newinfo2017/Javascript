const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware para permitir JSON e requisições de diferentes origens
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados SQLite (cria o arquivo se não existir)
const db = new sqlite3.Database("./usuarios.db", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    } else {
        console.log("✅ Conectado ao banco de dados SQLite");
        criarTabelaUsuarios();
    }
});

// Criar tabela se não existir
function criarTabelaUsuarios() {
    db.run(
        `CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL
        )`,
        (err) => {
            if (err) console.error("Erro ao criar tabela:", err.message);
        }
    );
}

// Rota para listar todos os usuários
app.get("/usuarios", (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

// Rota para adicionar um novo usuário
app.post("/usuarios", (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
    }
    
    db.run("INSERT INTO usuarios (nome) VALUES (?)", [nome], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ id: this.lastID, nome });
    });
});

// Rota para buscar um usuário pelo ID
app.get("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido" });
    }

    db.get("SELECT * FROM usuarios WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (!row) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json(row);
    });
});

// Rota para atualizar um usuário pelo ID
app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido" });
    }
    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
    }

    db.run("UPDATE usuarios SET nome = ? WHERE id = ?", [nome, id], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Usuário atualizado com sucesso", id, nome });
    });
});

// Rota para deletar um usuário pelo ID
app.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido" });
    }

    db.run("DELETE FROM usuarios WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.json({ mensagem: "Usuário deletado com sucesso" });
    });
});

// Encerrar conexão com o banco ao parar o servidor
process.on("SIGINT", () => {
    db.close((err) => {
        if (err) {
            console.error("Erro ao fechar o banco de dados:", err.message);
        } else {
            console.log("🔴 Conexão com o banco de dados encerrada.");
        }
        process.exit(0);
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
