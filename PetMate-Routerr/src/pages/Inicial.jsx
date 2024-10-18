import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Inicial.css'

function Inicial() {
  return (
    <div>
        <Navbar />
        <div className="home-container">
            <img src="/images/banner_home.png" className='banner-home' />
            <div className="meio-home">
              <div className="texto-home">
                <div className="titulo-home">

                </div>
                <h2>Dê um Lar, </h2>
                <h2> Ganhe um Amigo!</h2>
                <p>Adotar um animal é oferecer uma segunda chance a um ser que precisa de amor. Eles trazem alegria, companheirismo e transformam sua vida. Faça a diferença hoje: adote e descubra o poder do amor incondicional!</p>
                
                <div className="botoes-home">
                  <button className='botao-adotar'>Adotar</button>
                  <button className='botao-cadastrar'>Cadastrar Pet</button>
                </div>

              </div>

              <div className="img-home">
                <img src="/images/dog_marrom_invertido.png" className='dog-home' />
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Inicial