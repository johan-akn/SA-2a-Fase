import React, { useState, useContext } from 'react';
import { PetContext } from '../contexts/PetContext';

export default function JanelaPet({ isOpen, setPetModalOpen }) {
    const { addPet } = useContext(PetContext);

    const [petData, setPetData] = useState({
        nome: '',
        idade: '',
        raca: '',
        descricao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(petData)
            });

            if (response.ok) {
                const newPet = await response.json();
                addPet(newPet);
                setPetModalOpen(false);
            } else {
                console.error('Falha ao salvar dados do pet.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        isOpen && (
            <div className="pet_modal_conteiner">
                <div className="cad-pet-container">
                    <h2>Adicionar Pet</h2>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={petData.nome}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="idade"
                        placeholder="Idade"
                        value={petData.idade}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="raca"
                        placeholder="Raça"
                        value={petData.raca}
                        onChange={handleChange}
                    />
                    <textarea
                        name="descricao"
                        placeholder="Descrição"
                        value={petData.descricao}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Salvar</button>
                </div>
            </div>
        )
    );
}