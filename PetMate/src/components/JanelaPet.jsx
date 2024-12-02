import React, { useContext, useState, useEffect } from 'react';
import './JanelaPet.css';
import { PetContext } from "../contexts/PetContext";
import axios from 'axios';

export default function JanelaPet({ isOpen, setPetModalOpen }) {
  const { pet } = useContext(PetContext);
  const [doador, setDoador] = useState(null);

  useEffect(() => {
    if (pet && pet.id_usuario) {
      const fetchDoador = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/usuarios/${pet.id_usuario}`);
          setDoador(response.data);
        } catch (error) {
          console.error('Erro ao buscar informações do doador:', error);
        }
      };
      fetchDoador();
    }
  }, [pet]);

  if (!isOpen || !pet) {
    return null;
  }

  return (
    <div className='pet_modal_conteiner'>
      <div className='conteiner_modal'>
        <div className="cad-pet-container">
          <div className="titulo-pet-modal">
            <h2>Detalhes do Pet</h2>
            <button onClick={() => setPetModalOpen(false)} className='botao_modal'>{'<'}</button>
          </div>
          <img src="/images/barra_marrom.png" className='barra-pet-modal' alt="Barra" />

          <div className="card-modal-container">
            <div className="info-container">
              <div className="img-modal">
                <img 
                  src={pet.imagem ? `data:image/jpeg;base64,${pet.imagem}` : "/images/default_pet_image.jpg"} 
                  alt={`Imagem de ${pet.nome}`} 
                  className="pet-image" 
                />
              </div>
              <div className="detalhes-pet">
                <p>Nome</p>{pet.nome}
                <p>Espécie</p>{pet.especie}
                <p>Raça</p>{pet.raca}
                <p>Idade</p>{pet.idade}
                <p>Gênero</p>{pet.genero}
                <p>Descrição</p>{pet.descricao}
              </div>
            </div>

            <div className="info-doador-modal">
              <h2>Quer Adotar?</h2>
              <p>Para adotar este pet, entre em contato com o protetor:</p>
              {doador && (
                <div className="info-doador">
                  <p>Nome do anunciante: {doador.nome}</p>
                  <p>Telefone: {doador.telefone}</p>
                  <p>Email: {doador.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}