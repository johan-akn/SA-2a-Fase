import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"


function Login() {
  return (
<div>
        {/* <Navbar /> */}
        <div className="container-login">
            <div className="img-login">
                <img src="./images/cachorro-login.png" alt="" />
            </div>

            <div className="info-login">

                {/* ↓ "Login" ↓ */}
            <div className="titulo-input">

                <div className="texto-login">
                        <h2>Login</h2>
                        <img src="/images/barra-roxa.png" className='barra-roxa' />   
                        <p>Digite seus dados de acesso no campo abaixo.</p> 
                </div>

                <div className="inputs-login">
                    {/* ↓ coluna 1 ↓*/}
                    <div className="inpts-login">
                        <div className="inpt-p">
                            <p>Email:</p>
                            <input type="text" placeholder='Digite seu email' />
                        </div>

                        <div className="inpt-p">
                            <p>Senha:</p>
                            <input type="text" placeholder='Digite sua senha' />
                        </div>
                    </div>
                </div>
                </div>

                
                    {/* botão "cadastrar + checkbox" */}
                <div className="base-login">
                    <button type='submit'>Login</button>
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
