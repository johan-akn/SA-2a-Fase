import React from 'react'
import { useContext } from "react"
import { useState } from "react"
import { PetContext } from '../contexts/PetContext'
import './CardContainer.css'
import JanelaPet from './JanelaPet'

function CardContainer() {
    const { pets, pet, setPet } = useContext(PetContext)
    const [openPetModal, setOpenPetModal] = useState(false)

  return (
    <div>
      <JanelaPet isOpen={openPetModal} setPetModalOpen={() => setOpenPetModal(!openPetModal)}/>

        <div className="card-container">
          {pets.map((p) => (
            <div key={p.id} className="pet-card">
              <img
                src={p.imagem ? URL.createObjectURL(p.imagem) : "/images/default_pet_image.jpg"}
                alt={`Imagem de ${p.nome}`}
                className="pet-image"
              />
              <div className="pet-info">
                <h3>{p.nome}</h3>
                <p><strong>Raça:</strong> {p.raca}</p>
                <p><strong>Idade:</strong> {p.idade} anos</p>
                <p>{p.porte} | {p.genero}</p>
              </div>
              <button className="botao-info-pet" onClick={ () => {
                setPet(p)
                setOpenPetModal(true)
              }}>Adotar</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default CardContainer