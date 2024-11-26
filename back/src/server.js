const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'petmate',
    password: 'senai',
    port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

app.post('/usuarios', async (req, res) => {
    const { nome, endereco, email, telefone, senha, cpf } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (nome, endereco, email, telefone, senha, cpf) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nome, endereco, email, telefone, senha, cpf]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone, senha, cpf } = req.body;
    try {
        const result = await pool.query(
            'UPDATE usuarios SET nome = $1, endereco = $2, email = $3, telefone = $4, senha = $5, cpf = $6 WHERE id = $7 RETURNING *',
            [nome, endereco, email, telefone, senha, cpf, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


const express = require('express');
const router = express.Router();
const db = require('../db'); // Ajuste o caminho para sua conexão com o banco de dados

router.post('/register', async (req, res) => {
    const { nome, email, senha, telefone, endereco, cpf, termos } = req.body;

    // Verificar se o email já existe
    const existingUser = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
        return res.status(400).json({ error: 'Email já em uso' });
    }

    // Inserir novo usuário
    const result = await db.query(
        'INSERT INTO usuarios (nome, email, senha, telefone, endereco, cpf, termos) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [nome, email, senha, telefone, endereco, cpf, termos]
    );

    res.status(201).json(result.rows[0]);
});

module.exports = router;