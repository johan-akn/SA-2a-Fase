import { useContext } from "react"
import { useState } from "react"
import JanelaModal from "../components/JanelaModal"
import JanelaPet from "../components/JanelaPet"
import CardContainer from "../components/CardContainer"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PetContext } from '../contexts/PetContext'
import './Adotar.css'

function Adotar() {
  const [openModal, setOpenCadModal] = useState(false)
  const [openPetModal, setOpenPetModal] = useState(false)
  const { pets, pet, setPet } = useContext(PetContext)


  return (
    <div>

      <Navbar />
    <div className="adotar-container">

      <div className="titulo-botao-adotar">
          <div className="titulo-adotar">
              <h2>Pets para Adoção</h2>
              <p>Transforme a vida de um pet e ganhe um amigo para sempre!</p>
          </div>
          <div >
            <button onClick={() => setOpenCadModal(true)} className="botao-modal">Cadastrar Pet</button>
          </div>
      </div>
      <JanelaModal isOpen={openModal} setModalOpen={() => setOpenCadModal(!openModal)}/>

      <div className="pets-container">
        <CardContainer />
      </div>
    </div>
      
      <Footer />
    </div>

  )
}

export default Adotar
