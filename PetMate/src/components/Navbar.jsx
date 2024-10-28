import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext"
import './Navbar.css'
import NavDeslogado from "./NavDeslogado"
import NavLogado from "./NavLogado"

function Navbar() {
  const { logado } = useContext(GlobalContext)

  return (
    <nav className="navbar-container">
      <img className="nav-img" src="/images/petmate.svg" alt="logo_petmate"/>

      <div className="botoes-nav">
        <Link to="/home">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/final">Final</Link>
        
        {logado ? <NavLogado /> : <NavDeslogado />}
      </div>
    </nav>
  )
}

export default Navbar
