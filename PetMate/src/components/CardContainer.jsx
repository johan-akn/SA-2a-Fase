import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { PetContext } from '../contexts/PetContext';
import { getPets } from '../apiService';
import './CardContainer.css';
import JanelaPet from './JanelaPet';

function CardContainer() {
  const { pets, setPets, setPet } = useContext(PetContext);
  const [openPetModal, setOpenPetModal] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await getPets();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, [setPets]);

  return (
    <div>
      <JanelaPet isOpen={openPetModal} setPetModalOpen={() => setOpenPetModal(!openPetModal)} />

      <div className="card-container">
        {pets.map((p) => (
          <div key={p.id} className="pet-card">
            <img
              src={p.imagem ? p.imagem : "/images/default_pet_image.jpg"}
              alt={`Imagem de ${p.nome}`}
              className="pet-image"
            />
            <div className="pet-info">
              <h3>{p.nome}</h3>
              <p><strong>Raça:</strong> {p.raca}</p>
              <p><strong>Idade:</strong> {p.idade} anos</p>
              <p>{p.porte} | {p.genero}</p>
            </div>
            <button className="botao-info-pet" onClick={() => {
              setPet(p);
              setOpenPetModal(true);
            }}>Adotar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;