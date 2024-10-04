import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar-container">
      <img class="nav-img" src="/images/logo-bege-sem-fundo.png" alt=""/>

      <div className="botoes-nav">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/dragoes">Dragões</Link>
      </div>
    </nav>
  )
}

export default Navbar
