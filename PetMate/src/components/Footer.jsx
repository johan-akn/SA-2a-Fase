import React from 'react'
import './Footer.css'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6"; import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className='footer-container'>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
        </style>

        <div className="topo-footer">
          <div className="links-footer">
              <p>Termos de Uso</p>
              <p>Sobre nós</p>
              <p>Política de Privacidade</p>
          </div>

          <div className="icons-footer">
              <FaFacebook className='icon_footer'/>
              <FaWhatsapp className='icon_footer'/>
              <FaInstagram className='icon_footer'/>
              {/* <IoLogoWhatsapp className='icon_wpp'/>
              <AiFillInstagram className='icon_insta'/> */}
          </div>
        </div>


        <div className="barra_footer">
            <img src="/images/barra_footer.png" />
        </div>

        <div className="direitos">
          <p>©PetMate todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer