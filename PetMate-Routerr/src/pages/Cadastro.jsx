import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom"
import './Cadastro.css'

function Cadastro() {
  return (
    <div>
        {/* <Navbar /> */}
        <div className="container-cadastro">


            <div className="img-cadastro">
                <img src="./images/fundo-cadastro.png" alt="" />
            </div>

            <div className="info-cadastro">

                {/* ↓ "cadastro" e botão de login ↓ */}
                <div className="texto-cadastro">
                    <div className="barra-img">
                        <h2>Cadastre-se</h2>
                        <img src="/images/barra-roxa.png" />    
                    </div>
                    <Link to="/login">
                        <button className=''>Login</button>
                    </Link>
                </div>

                <div className="inputs-cadastro">
                    {/* ↓ coluna 1 ↓*/}
                    <div className="inpts-um">

                        <div className="inpt-p">
                            <p>Nome:</p>
                            <input type="text" placeholder='Digite seu nome' />
                        </div>

                        <div className="inpt-p">
                            <p>Email:</p>
                            <input type="text" placeholder='Digite seu email' />
                        </div>

                        <div className="inpt-p">
                            <p>Senha:</p>
                            <input type="text" placeholder='Digite sua senha' />
                        </div>
                   
                    </div>

                    {/* ↓ coluna 2 ↓ */}
                    <div className="inpts-dois">
                            <div className="inpt-p">
                                <p>Telefone:</p>
                                <input type="text" placeholder='(XX) X XXXX-XXXX' />
                            </div>

                            <div className="inpt-p">
                                <p>Endereço:</p>
                                <input type="text" placeholder='Digite seu endereço' />
                            </div>

                            <div className="inpt-p">
                                    <p>CPF:</p>
                                    <input type="text" placeholder='Digite seu CPF' />
                            </div>
                            </div>
                </div>
                
                    {/* botão "cadastrar + checkbox" */}
                <div className="botao-termos-cadastro">
                    <div className="termos">
                    <input type="checkbox" />
                        <p>Ao preencher o formuário acima  você concorda com os 
                        nossos </p>
                        <a href="">Termos de Uso</a>
                        <p>e nossa</p>
                        <a href="">Política de Privacidade.</a>
                    </div>
                    <button type='submit'>Cadastrar</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cadastro
