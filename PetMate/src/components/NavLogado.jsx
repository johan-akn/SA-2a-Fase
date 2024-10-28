import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import { FaUserCircle } from "react-icons/fa";

function NavLogado() {
  return (
    <div>
        {/* <Link to="/perfil"><img src="/images/profile.svg" className="profile"/></Link> */}
        <Link to="/perfil"><FaUserCircle className="profile"/></Link>
        
    </div>
  )
}

export default NavLogado