import React from 'react'
import { Link } from "react-router-dom"
import './Cadastro.css'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

function Cadastro() {
  return (
    <div>
        {/* <Navbar /> */}
        <div className="container-cadastro">


            <div className="container-img">
                <img src="./images/gato1.png" alt="" className='img-cadastro' />
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
                            <div className="icon-input">
                                <FaUser className="icon-cadastro" />
                                <p>Nome:</p>
                            </div>
                            <input type="text" placeholder='Digite seu nome' />
                        </div>

                        <div className="inpt-p">
                            <div className="icon-input">
                                <FaEnvelope className="icon-cadastro" />
                                <p>Email:</p>
                            </div>
                            <input type="text" placeholder='Digite seu email' />
                        </div>

                        <div className="inpt-p">
                            <div className="icon-input">
                                <FaLock className="icon-cadastro" />
                                <p>Senha:</p>
                            </div>
                            <input type="password" placeholder='Digite sua senha' />
                        </div>
                   
                    </div>

                    {/* ↓ coluna 2 ↓ */}
                    <div className="inpts-dois">
                            <div className="inpt-p">
                                <div className="icon-input">
                                    <FaPhone className="icon-cadastro" />
                                    <p>Telefone:</p>
                                </div>
                                <input type="number" placeholder='(XX) X XXXX-XXXX' />
                            </div>

                            <div className="inpt-p">
                                <div className="icon-input">
                                    <FaMapMarkerAlt className="icon-cadastro" />
                                    <p>Endereço:</p>
                                </div>
                                <input type="text" placeholder='Digite seu endereço' />
                            </div>

                            <div className="inpt-p">
                                <div className="icon-input">
                                        <FaIdCard className="icon-cadastro" />
                                        <p>CPF:</p>
                                </div>
                                    <input type="number" placeholder='Digite seu CPF' />
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
