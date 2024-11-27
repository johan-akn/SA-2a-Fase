import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // URL do backend
});



//Users
export const getUsuarios = async () => {
    const response = await api.get('/usuarios');
    return response.data;
};

export const getUsuarioById = async (id) => {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
};

export const addUsuario = async (usuario) => {
    const response = await api.post('/usuarios', usuario);
    return response.data;
};

export const updateUsuario = async (id, usuario) => {
    const response = await api.put(`/usuarios/${id}`, usuario);
    return response.data;
};

export const deleteUsuario = async (id) => {
    const response = await api.delete(`/usuarios/${id}`);
    return response.data;
};






//Pets
export const getPets = async () => {
    const response = await api.get('/pets');
    return response.data;
};

export const getPetById = async (id) => {
    const response = await api.get(`/pets/${id}`);
    return response.data;
};

export const addPet = async (pet) => {
    const response = await api.post('/pets', pet);
    return response.data;
};

export const updatePet = async (id, pet) => {
    const response = await api.put(`/pets/${id}`, pet);
    return response.data;
};

export const deletePet = async (id) => {
    const response = await api.delete(`/pets/${id}`);
    return response.data;
};



// const express = require('express');
// const router = express.Router();
// const db = require('../db'); // Ajuste o caminho para sua conexão com o banco de dados

// router.post('/register', async (req, res) => {
//     const { nome, email, senha, telefone, endereco, cpf, termos } = req.body;

//     // Verificar se o email já existe
//     const existingUser = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
//     if (existingUser.rows.length > 0) {
//         return res.status(400).json({ error: 'Email já em uso' });
//     }

//     // Inserir novo usuário
//     const result = await db.query(
//         'INSERT INTO usuarios (nome, email, senha, telefone, endereco, cpf, termos) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
//         [nome, email, senha, telefone, endereco, cpf, termos]
//     );

//     res.status(201).json(result.rows[0]);
// });

// module.exports = router;