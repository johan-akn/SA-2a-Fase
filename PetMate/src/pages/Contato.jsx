import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GlobalContext } from "../contexts/GlobalContext"
import './Contato.css'
import { FaPhoneVolume } from "react-icons/fa"
import { MdPermPhoneMsg } from "react-icons/md"

function Contato() {
  const {logado, logarNav} = useContext(GlobalContext)
  
  return (
    <div>
        <Navbar />
      <div className="contato-container">

           {/* <h1>Contato</h1>
           <button onClick={logarNav}>Logar</button>
           {logado && <p>você está logado</p>}
           {logado == false && <p>você está deslogado</p>} */}

           <div className="banner-contato">
              <img src="/images/banner_info.svg" alt="" />
           </div>

           <div className="meio-info-container">
              <div className="infos-contato">

                <div className="info-missao">
                  <h2>Nossa missão</h2>
                  <hr className="barra-info"/>
                  <p>Promover o encontro perfeito entre humanos e animais, proporcionando lares cheios de amor e cuidado para pets em busca de uma segunda chance. Trabalhamos para reduzir o abandono e conscientizar sobre a importância da adoção responsável.</p>
                </div>

                <div className="info-visao">
                  <h2>Visão</h2>
                  <hr className="barra-info"/>
                  <p>Ser a plataforma referência na conexão entre pessoas e pets, inspirando uma sociedade mais compassiva e comprometida com o bem-estar animal. Nosso objetivo é criar um mundo onde cada pet tenha um lar seguro e cheio de carinho.</p>
                </div>

                <div className="info-valores">
                  <h2>Valores</h2>
                  <hr className="barra-info"/>
                  <p>Amor, respeito e responsabilidade guiam nossas ações. Valorizamos a vida animal, a transparência nas adoções e o comprometimento em transformar histórias tristes em novos começos repletos de felicidade e companheirismo.</p>
                </div>

              </div>

              <div className="fale-conosco">
                <div className="fale-conosco-title">
                  <div className="f-c-barra">
                    <h2>Fale com a gente!</h2>
                    <hr size={5} color="whitesmoke"/>
                  </div>
                    <MdPermPhoneMsg size={30} color="whitesmoke" />
                </div>
                <img src="/images/dog_oculos.svg" className="dog-oculos" />
              </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contato
