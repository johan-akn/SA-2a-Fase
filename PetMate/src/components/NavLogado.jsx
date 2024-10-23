import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

function NavLogado() {
  return (
    <div>
        <Link to="/perfil"><img src="/images/profile.svg" className="profile"/></Link>
    </div>
  )
}

export default NavLogado