import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import './Perfil.css';
import { CiEdit } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { GlobalContext } from '../contexts/GlobalContext';

function Perfil() {
    const { userLogado, PhoneInput } = useContext(GlobalContext);

    return (
        <div>
            <Navbar />
            <div className="container-perfil">
                <div className="container-pets"></div>
                <div className="info-perfil">
                    <div className="titulo-barra">
                        <h2>Configurações de Conta</h2>
                        <img src="/images/barra_marrom.png" className='barra-perfil' />
                        <h4>Dados do Perfil</h4>
                    </div>

                    <div className="inputs-perfil">
                        <div className="inputs-perfil-1">
                            <div className="input-perfil">
                                <p>Nome*</p>
                                <input type="text" value={userLogado?.nome || ''} disabled />
                            </div>

                            <div className="input-perfil">
                                <p>Email</p>
                                <div className="input-edit">
                                    <input type="text" value={userLogado?.email || ''} disabled />
                                    <FaEdit className='icon-lapis' />
                                </div>
                            </div>

                            <div className="input-perfil">
                                <p>Senha</p>
                                <div className="input-edit">
                                    <input type="text" value="******" disabled />
                                    <FaEdit className='icon-lapis' />
                                </div>
                            </div>
                        </div>
                        <div className="inputs-perfil-2">
                            <div className="input-perfil">
                                <p>CPF*</p>
                                <input type="text" value={userLogado?.cpf || ''} disabled />
                            </div>

                            <div className="input-perfil">
                                <p>Endereço</p>
                                <div className="input-edit">
                                    <input type="text" value={userLogado?.endereco || ''} disabled />
                                    <FaEdit className='icon-lapis' />
                                </div>
                            </div>

                            <div className="input-perfil">
                                <p>Telefone</p>
                                <div className="input-edit">
                                    <input type="text" value={userLogado?.telefone || ''} disabled />
                                    <FaEdit className='icon-lapis' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="botao-sair">
                        <div className="sair-conta">
                            Sair da Conta
                            <FiLogOut className='icon-logout' />
                        </div>
                    </button>
                    <div className="excluir-conta">
                        <h4>Excluir conta permanentemente</h4>
                        <p>Deseja excluir sua conta e todos seus anúncios? Esta ação não pode ser desfeita.</p>
                        <button className="botao-excluir">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;