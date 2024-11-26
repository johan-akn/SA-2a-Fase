import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GlobalContext } from '../contexts/GlobalContext';
import './Login.css';

function Login() {
    const { Logar, mudarTipo, MostrarSenha } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        Logar(email, senha);
    };

    return (
        <div>
            <div className="container-login">
                <div className="img-login">
                    <img src="./images/golden1.svg" className='img_cachorro' />
                </div>
                <div className="info-login">
                    <div className="titulo-input">
                        <div className="texto-login">
                            <h2>Login</h2>
                            <img src="/images/barra_marrom.png" className='barra_marrom' />
                            <p>Digite seus dados de acesso no campo abaixo.</p>
                        </div>
                        <div className="inputs-login">
                            <div className="inpts-login">
                                <div className="inpt-p">
                                    <div className="icon-input">
                                        <FaEnvelope className="icon-login" />
                                        <p>Email:</p>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder='Digite seu email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="inpt-p">
                                    <div className="icon-input">
                                        <FaLock className="icon-login" />
                                        <p>Senha:</p>
                                    </div>
                                    <div className="mostrar-senha">
                                        <input
                                            type="password"
                                            placeholder='Digite sua senha'
                                            id='inputSenha'
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                        <button onClick={MostrarSenha} className='icon-mostrar-senha'>
                                            {mudarTipo ? <FaRegEye /> : <FaRegEyeSlash />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="base-login">
                        {/* <Link to='/home'> */}
                            <button type='submit' onClick={handleLogin}>Login</button>
                        {/* </Link> */}
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
    );
}

export default Login;