import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import './Contato.css'

function Contato() {
  const {logado, Logar} = useContext(GlobalContext)
  
  return (
    <div>
        <Navbar />
      <div className="contato-container">
           <h1>Contato</h1>
           <button onClick={Logar}>Logar</button>
           {logado && <p>você está logado</p>}
           {logado == false && <p>você está deslogado</p>}
        </div>
    </div>
  )
}

export default Contato
