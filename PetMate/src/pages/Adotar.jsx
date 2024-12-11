import { useContext, useEffect, useState } from "react";
import JanelaModal from "../components/JanelaModal";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from "react-router-dom";
import './Adotar.css';
import LastPage from "../components/LastPage";
import ScrollToTop from "../components/ScrollToTop";

function Adotar() {
  const [openModal, setOpenCadModal] = useState(false);
  const { logado } = useContext(GlobalContext);
  const navigate = useNavigate()


  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded) {
        localStorage.setItem('hasReloaded', 'true');
        window.location.reload();
    } else {
        localStorage.removeItem('hasReloaded');
    }
}, []);

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="banner-contato">
              <img src="/images/banner_info.svg" alt="" />
           </div>
      <div className="adotar-container">
        <div className="titulo-botao-adotar">
          <div className="titulo-adotar">
            <h2>Pets para Adoção</h2>
            <p>Transforme a vida de um pet e ganhe um amigo para sempre!</p>
          </div>
          <div>
          {logado ? (
                      <button className='botao-modal' onClick={ () => setOpenCadModal(true)}>Cadastrar Pet</button>
                  ) : <button className='botao-modal' onClick={ () => navigate('/login')}>Cadastrar Pet</button>}
          </div>
        </div>
        <JanelaModal isOpen={openModal} setModalOpen={() => setOpenCadModal(!openModal)} />

        <div className="pets-container">
          <CardContainer />
        </div>
        <LastPage />
      </div>
      <Footer />
    </div>
  );
}

export default Adotar;