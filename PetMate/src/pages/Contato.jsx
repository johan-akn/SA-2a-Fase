import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import './Contato.css'

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
                </div>

                <div className="info-visao">
                  <h2>Visão</h2>
                  <hr className="barra-info"/>
                </div>

                <div className="info-valores">
                  <h2>Valores</h2>
                  <hr className="barra-info"/>
                </div>

              </div>

              <div className="fale-conosco">
                <h2>Fale conosco</h2>
                <img src="/images/dog_oculos.svg" className="dog-oculos" />
              </div>
           </div>
        </div>
    </div>
  )
}

export default Contato
