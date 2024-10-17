import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
        </style>

        <div className="links-container">
            <p>Termos de Uso</p>
            <p>Sobre nós</p>
            <p>Política de Privacidade</p>
        </div>

        <div className="barra_footer">
            <img src="/images/barra_footer.png" alt="" />
        </div>
    </div>
  )
}

export default Footer