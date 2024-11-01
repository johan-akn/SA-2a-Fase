import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { GlobalContext } from '../contexts/GlobalContext';
import { useContext } from 'react';


function Login() {
  const {mudarTipo, MostrarSenha} = useContext(GlobalContext)

  return (
<div>
        {/* <Navbar /> */}
        <div className="container-login">
            <div className="img-login">
                <img src="./images/golden1.svg" className='img_cachorro' />
            </div>

            <div className="info-login">

                {/* ↓ "Login" ↓ */}
            <div className="titulo-input">

                <div className="texto-login">
                        <h2>Login</h2>
                        <img src="/images/barra_marrom.png" className='barra_marrom' />   
                        <p>Digite seus dados de acesso no campo abaixo.</p> 
                </div>

                <div className="inputs-login">
                    {/* ↓ coluna 1 ↓*/}
                    <div className="inpts-login">
                        <div className="inpt-p">

                            <div className="icon-input">
                                <FaEnvelope className="icon-login" />
                                <p>Email:</p>
                            </div>

                            <input type="text" placeholder='Digite seu email' />
                        </div>

                        <div className="inpt-p">
                        <div className="icon-input">
                            <FaLock className="icon-login" />
                            <p>Senha:</p>
                        </div>
                        <div className="mostrar-senha">
                            <input type="password" placeholder='Digite sua senha' id='inputSenha' />
                            <button onClick={MostrarSenha} className='icon-mostrar-senha'>
                                {mudarTipo ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>

                
                    {/* botão "cadastrar + checkbox" */}
                <div className="base-login">
                    <Link to='/home'>
                        <button type='submit'>Login</button>
                    </Link>
                    <div className="sem-cadastro">
                        <p>Ainda não se cadastrou? </p>

                    <Link to="/cadastro">
                        <a>Cadastre-se</a>
                    </Link>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login
