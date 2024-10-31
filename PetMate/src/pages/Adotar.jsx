import { useContext } from "react"
import { useState } from "react"
import JanelaModal from "../components/JanelaModal"
import Navbar from "../components/Navbar"
import { PetContext } from '../contexts/PetContext'
import './Adotar.css'

function Adotar() {
  const [openModal, setOpenModal] = useState(false)
  const { pets } = useContext(PetContext)

  return (
    <div>
      <Navbar />

      <div className="botao-modal">
        <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      </div>

      <JanelaModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Olá eu sou o modal!!!
      </JanelaModal>

      <div className="pets-container">
        <h2>Pets para Adoção</h2>
        <div className="card-container">
          {pets.map((pet, index) => (
            <div key={index} className="pet-card">
              <img
                src={pet.imagem ? URL.createObjectURL(pet.imagem) : "/images/default_pet_image.jpg"}
                alt={`Imagem de ${pet.nome}`}
                className="pet-image"
              />
              <div className="pet-info">
                <h3>{pet.nome}</h3>
                <p><strong>Idade:</strong> {pet.idade}</p>
                <p><strong>Raça:</strong> {pet.raca}</p>
                <p><strong>Descrição:</strong> {pet.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Adotar
