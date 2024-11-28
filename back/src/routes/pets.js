const express = require('express');
const router = express.Router();
const pool = require('../db'); 

router.post('/pets', async (req, res) => {
    const { nome, idade, raca, descricao } = req.body;

    try {
        const newPet = await pool.query(
            'INSERT INTO pets (nome, idade, raca, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, idade, raca, descricao]
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