import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import './Navbar.css';
import NavDeslogado from "./NavDeslogado";
import NavLogado from "./NavLogado";

function Navbar() {
  const { logado } = useContext(GlobalContext);
  const [isLogado, setIsLogado] = useState(logado);

  useEffect(() => {
    const storedLogado = JSON.parse(localStorage.getItem("logado"));
    if (storedLogado !== null) {
      setIsLogado(storedLogado);
    }
  }, [logado]);

  return (
    <nav className="navbar-container">
      <div className="img_nav">
        <Link to='/home'>
          <img className="nav-img" src="/images/petmate.svg" alt="logo_petmate"/>
        </Link>
      </div>

      <div className="botoes-nav">
        <Link to="/home">Home</Link>
        <Link to="/adotar">Adotar</Link>
        <Link to="/contato">Sobre Nós</Link>
        
        {isLogado ? <NavLogado /> : <NavDeslogado />}
      </div>
    </nav>
  )
}

export default Navbar;