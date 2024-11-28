const express = require('express');
const router = express.Router();
const pool = require('../db'); 

router.post('/pets', async (req, res) => {
    const { nome, idade, raca, descricao, porte, imagem, id_usuario } = req.body;

    try {
        const newPet = await pool.query(
            'INSERT INTO pets (nome, idade, raca, descricao, porte, imagem, id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [nome, idade, raca, descricao, porte, imagem, id_usuario]
        );
        res.json(newPet.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/pets', async (req, res) => {
    try {
      const allPets = await pool.query('SELECT * FROM pets');
      res.json(allPets.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});

module.exports = router;