import React from 'react'
import { Link } from "react-router-dom"
import './Cadastro.css'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
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
            users, setUsers, addUser
        } = useContext(UserContext)


        const CadastrarUsuario = (e) => {
            e.preventDefault()
            if(termosCadastro == true){
        
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
        {/* <Navbar /> */}
        <form className="container-cadastro" onSubmit={CadastrarUsuario}>


            <div className="container-img">
                <img src="/images/dog_marrom2.svg" alt="" className='img-cadastro' />
            </div>

            <div className="info-cadastro">

                {/* ↓ "cadastro" e botão de login ↓ */}
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
                    {/* ↓ coluna 1 ↓*/}
                    <div className="inpts-um">

                        <div className="inpt-p">
                            <div className="icon-input">
                                <FaUser className="icon-cadastro" />
                                <p>Nome:</p>
                            </div>
                            <input type="text" placeholder='Digite seu nome'
                                value={inptNomeCadastro}
                                onChange={ (e) => setInptNomeCadastro(e.target.value) }
                             />
                        </div>

                        <div className="inpt-p">
                            <div className="icon-input">
                                <FaEnvelope className="icon-cadastro" />
                                <p>Email:</p>
                            </div>
                            <input type="email" placeholder='Digite seu email'
                                value={inptEmailCadastro}
                                onChange={ (e) => setInptEmailCadastro(e.target.value) }
                             />
                        </div>

                        <div className="inpt-p">
                            <div className="icon-input">
                                <FaLock className="icon-cadastro" />
                                <p>Senha:</p>
                            </div>
                            <input type="password" placeholder='Digite sua senha'
                                value={inptSenhaCadastro}
                                onChange={ (e) => setInptSenhaCadastro(e.target.value) }
                             />
                        </div>
                    </div>

                    {/* ↓ coluna 2 ↓ */}
                    <div className="inpts-dois">
                            <div className="inpt-p">
                                <div className="icon-input">
                                    <FaPhone className="icon-cadastro" />
                                    <p>Telefone:</p>
                                </div>
                                <PhoneInput type="text" placeholder='(XX) X XXXX-XXXX'
                                    value={inptTelefoneCadastro}
                                    onChange={ (e) => setInptTelefoneCadastro(e.target.value) }
                                 /> 
                            </div>

                            <div className="inpt-p">
                                <div className="icon-input">
                                    <FaMapMarkerAlt className="icon-cadastro" />
                                    <p>Endereço:</p>
                                </div>
                                <input type="text" placeholder='Digite seu endereço'
                                    value={inptEnderecoCadastro}
                                    onChange={ (e) => setInptEnderecoCadastro(e.target.value) }
                                 /> 
                            </div>

                            <div className="inpt-p">
                                <div className="icon-input">
                                        <FaIdCard className="icon-cadastro" />
                                        <p>CPF:</p>
                                </div>
                                <input type="text" placeholder='Digite seu CPF'
                                        value={inptCpfCadastro}
                                        onChange={ (e) => setInptCpfCadastro(e.target.value) }
                                />
                            </div>
                            </div>
                </div>
                
                    {/* botão "cadastrar + checkbox" */}
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
