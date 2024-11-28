import { useContext, useState, useEffect } from 'react';
import JanelaModal from '../components/JanelaModal';
import JanelaPet from '../components/JanelaPet';
import CardContainer from '../components/CardContainer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PetContext } from '../contexts/PetContext';
import './Adotar.css';

function Adotar() {
  const [openModal, setOpenCadModal] = useState(false);
  const [openPetModal, setOpenPetModal] = useState(false);
  const { pets, setPets } = useContext(PetContext);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/pets');
        if (response.ok) {
          const data = await response.json();
          setPets(data);
        } else {
          console.error('Failed to fetch pets');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPets();
  }, [setPets]);

  return (
    <div>
      <Navbar />
      <div className="adotar-container">
        <div className="titulo-botao-adotar">
          <div className="titulo-adotar">
            <h2>Pets para Adoção</h2>
            <p>Transforme a vida de um pet e ganhe um amigo para sempre!</p>
          </div>
          <div>
            <button onClick={() => setOpenCadModal(true)} className="botao-modal">Cadastrar Pet</button>
          </div>
        </div>
        <JanelaModal isOpen={openModal} setModalOpen={() => setOpenCadModal(!openModal)} />
        <div className="pets-container">
          <CardContainer pets={pets} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Adotar;