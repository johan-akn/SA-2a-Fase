import React, { useContext } from 'react'
import './JanelaPet.css'
import { PetContext } from "../contexts/PetContext"

export default function JanelaPet({ isOpen, setPetModalOpen }) {
  const { pets, pet, setPet } = useContext(PetContext)

  if (!isOpen) {
    return null
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
                    src={pet.imagem ? URL.createObjectURL(pet.imagem) : "/images/default_pet_image.jpg"} 
                    alt={`Imagem de ${pet.nome}`} 
                    className="pet-image" 
                  />
                </div>
                <div className="detalhes-pet">
                  <p>Nome</p>
                    {pet.nome}
                  <p>Espécie</p>
                   {pet.especie}
                  <p>Raça</p>
                   {pet.raca}
                  <p>Idade</p>
                   {pet.idade}
                  <p>Gênero</p>
                   {pet.genero}
                </div>
              </div>

              <div className="descricao-pet-modal">
                <h2>Descrição</h2>
                <p>{pet.descricao}</p>
              </div>

              <div className="info-doador-modal">
                <h2>Quer Adotar?</h2>
                <p className='adotarTXT'>Para adotar este pet, entre em contato com o protetor:</p>
                <p className='dadosDoador'>Nome do anunciante:</p>
                <p className='dadosDoador'>Telefone:</p>
                <p className='dadosDoador'>Email:</p>
              </div>
            </div>
    
        </div>
      </div>
    </div>
  )
}
