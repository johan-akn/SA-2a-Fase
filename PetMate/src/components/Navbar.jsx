import { Link } from "react-router-dom"
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <nav className="navbar-container">
      <img class="nav-img" src="/images/petmate.svg" alt=""/>

      <div className="botoes-nav">
        <Link to="/home">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/about">About</Link>
        {/* <CgProfile className="icon-perfil" /> */}
        {/* <Link to="/generica">Genérica</Link> */}
        {/* <Link to="/final">Final</Link> */}
        {/* <Link to="/dragoes">Dragões</Link> */}
      </div>
    </nav>
  )
}

export default Navbar
