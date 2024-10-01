import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div class="navbar-conteiner">
        <img class="nav-img" src="/images/logo-bege-sem-fundo.png" alt=""/>
        
        <div class="botoes-nav">
            <a>Home</a>
            <a>Sobre nós</a>
            <a>Contato</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
