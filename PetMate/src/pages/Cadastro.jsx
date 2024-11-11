import React from 'react'
import { Link } from "react-router-dom"
import './Cadastro.css'
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaIdCard } from "react-icons/fa";
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserContext } from '../contexts/UserContext';

function Cadastro() {
    const { PhoneInput } = useContext(GlobalContext)
    const {
        inptNomeCadastro, setInptNomeCadastro,
        inptEmailCadastro, setInptEmailCadastro,
        inptSenhaCadastro, setInptSenhaCadastro,
        inptTelefoneCadastro, setInptTelefoneCadastro,
        inptEnderecoCadastro, setInptEnderecoCadastro,
        inptCpfCadastro, setInptCpfCadastro,
        termosCadastro, setTermosCadastro,
        addUser
    } = useContext(UserContext)

    const CadastrarUsuario = (e) => {
        e.preventDefault()
        if(termosCadastro) {
            const novoUser = {
                nome: inptNomeCadastro,
                email: inptEmailCadastro,
                senha: inptSenhaCadastro,
                telefone: inptTelefoneCadastro,
                endereco: inptEnderecoCadastro,
                cpf: inptCpfCadastro,
                termos: termosCadastro,
                id: Date.now(),
            }
            addUser(novoUser)
            console.log('Usuário cadastrado:', novoUser)
        }
    }

    return (
        <div>
            <form className="container-cadastro" onSubmit={CadastrarUsuario}>
                <div className="container-img">
                    <img src="/images/dog_marrom2.svg" alt="" className='img-cadastro' />
                </div>

                <div className="info-cadastro">
                    <div className="texto-cadastro">
                        <div className="barra-img">
                            <h2>Cadastre-se</h2>
                            <img src="/images/barra_marrom.png" className='barra_cadastro' />    
                        </div>
                        <Link to="/login">
                            <button className=''>Login</button>
                        </Link>
                    </div>

                    <div className="inputs-cadastro">
                        <div className="inpts-um">
                            <div className="inpt-p">
                                <label htmlFor="nome">
                                    <div className="icon-input">
                                        <FaUser className="icon-cadastro" />
                                        <p>Nome:</p>
                                    </div>
                                </label>
                                <input id="nome" type="text" placeholder='Digite seu nome'
                                    value={inptNomeCadastro}
                                    onChange={(e) => setInptNomeCadastro(e.target.value)}
                                />
                            </div>

                            <div className="inpt-p">
                                <label htmlFor="email">
                                    <div className="icon-input">
                                        <FaEnvelope className="icon-cadastro" />
                                        <p>Email:</p>
                                    </div>
                                </label>
                                <input id="email" type="email" placeholder='Digite seu email'
                                    value={inptEmailCadastro}
                                    onChange={(e) => setInptEmailCadastro(e.target.value)}
                                />
                            </div>

                            <div className="inpt-p">
                                <label htmlFor="senha">
                                    <div className="icon-input">
                                        <FaLock className="icon-cadastro" />
                                        <p>Senha:</p>
                                    </div>
                                </label>
                                <input id="senha" type="password" placeholder='Digite sua senha'
                                    value={inptSenhaCadastro}
                                    onChange={(e) => setInptSenhaCadastro(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="inpts-dois">
                            <div className="inpt-p">
                                <label htmlFor="telefone">
                                    <div className="icon-input">
                                        <FaPhone className="icon-telefone" />
                                        <p>Telefone:</p>
                                    </div>
                                </label>
                                <PhoneInput id="telefone" type="text" placeholder='(XX) X XXXX-XXXX'
                                    value={inptTelefoneCadastro}
                                    onChange={(e) => setInptTelefoneCadastro(e.target.value)}
                                />
                            </div>

                            <div className="inpt-p">
                                <label htmlFor="endereco">
                                    <div className="icon-input">
                                        <FaMapMarkerAlt className="icon-cadastro" />
                                        <p>Endereço:</p>
                                    </div>
                                </label>
                                <input id="endereco" type="text" placeholder='Digite seu endereço'
                                    value={inptEnderecoCadastro}
                                    onChange={(e) => setInptEnderecoCadastro(e.target.value)}
                                />
                            </div>

                            <div className="inpt-p">
                                <label htmlFor="cpf">
                                    <div className="icon-input">
                                        <FaIdCard className="icon-cadastro" />
                                        <p>CPF:</p>
                                    </div>
                                </label>
                                <input id="cpf" type="text" placeholder='Digite seu CPF'
                                    value={inptCpfCadastro}
                                    onChange={(e) => setInptCpfCadastro(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="botao-termos-cadastro">
                    <div className="termos">
                    <input type="checkbox"
                     checked={termosCadastro}
                     onChange={(e) => setTermosCadastro(e.target.checked)} />

                        <p>Ao preencher o formuário acima  você concorda com os 
                        nossos </p>
                        <a href="">Termos de Uso</a>
                        <p>e nossa</p>
                        <a href="">Política de Privacidade.</a>
                    </div>
                    {/* <Link to='/home'> */}
                        <button type='submit'>Cadastrar</button>
                    {/* </Link> */}
                </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastro

