import React from 'react'
import Navbar from '../components/Navbar'
import './Landing.css'
function Landing() {
  return (
    <div>
          <Navbar />
        <div class="container">
            <div class="base">
              <div class="texto">
                  <h2>Dê um Lar, Ganhe um Amigo!</h2>
                  <p class="texto-p">Adotar um animal é oferecer uma segunda chance a um ser que precisa de amor. Eles trazem alegria, companheirismo e transformam sua vida. Faça a diferença hoje: adote e descubra o poder do amor incondicional!
                  </p>
                  <button>CADASTRE-SE!</button>
              </div>
            <div>
                  {/* <img class="fundo" src="/images/pets2-removebg.png" alt=""/> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
