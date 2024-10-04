import React from 'react'
import Navbar from '../components/Navbar'
import './Cadastro.css'

function Cadastro() {
  return (
    <div>
        <Navbar />
        <div className="container-cadastro">

            {/* <h2>Cadastro</h2> */}

            <div className="img-cadastro">
                <img src="./images/beagles.png" alt="" />
            </div>

            <div className="info-cadastro">
                {/* ↓ "cadastro" e botão de login ↓ */}
                <div className="texto-cadastro">
                    <p>Cadastro</p>
                </div>

                <div className="inputs-cadastro">
                    {/* ↓ coluna 1 ↓*/}
                    <div className="inpts-um">
                        <p>Nome:</p>
                        <input type="text" />

                        <p>Email:</p>
                        <input type="text" />

                        <p>Senha:</p>
                        <input type="text" />
                    </div>

                    {/* ↓ coluna 2 ↓ */}
                    <div className="inpts-dois">
                        <p>Telefone:</p>
                        <input type="text" />

                        <p>Endereço:</p>
                        <input type="text" />

                        <p>CPF:</p>
                        <input type="text" />
                    </div>

                </div>
                
                    {/* botão "cadastrar + checkbox" */}
                <div className="botao-termos-cadastro">

                </div>
            </div>

        </div>
    </div>
  )
}

export default Cadastro
