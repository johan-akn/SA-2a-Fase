import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Inicial.css'

function Inicial() {
  return (
    <div>
        <Navbar />
        <div className="home-container">
            <img src="/images/banner_home2.png" className='banner-home' />
            <div className="meio-home">
              <div className="texto-home">
                <div className="titulo-home">
                  <h2>Encontre seu</h2>
                  <h2> Companheiro de vida aqui!</h2>
                </div>
                  <p>Adotar no PetMate é mais do que dar um lar, é construir uma conexão cheia de amor e lealdade. Cada pet espera por uma chance de fazer parte da sua vida e retribuir com carinho incondicional. Adote e transforme vidas, incluindo a sua!</p>
                
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