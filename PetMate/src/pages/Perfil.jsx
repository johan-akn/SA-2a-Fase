import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Perfil.css';
import { FiLogOut } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { GlobalContext } from '../contexts/GlobalContext';
import ModalExclusaoDeConta from '../components/ModalExclusaoDeConta';
import { useNavigate } from 'react-router-dom';

function Perfil() {
    const [openModalExclui, setOpenModalExclui] = useState(false);
    const { userLogado, PhoneInput, Logout, updateUsuario, deleteUsuario } = useContext(GlobalContext);
    const [editMode, setEditMode] = useState(false);
    const [userData, setUserData] = useState(userLogado || {});
    const navigate = useNavigate();

    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');
        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        } else {
            localStorage.removeItem('hasReloaded');
        }
    }, []);

    const handleLogout = () => {
        Logout();
        navigate('/home');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await updateUsuario(userData.id_usuario, userData);
            setEditMode(false);
        } catch (error) {
            console.error('Erro ao atualizar usuário', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteUsuario(userData.id_usuario);
            handleLogout();
        } catch (error) {
            console.error('Erro ao deletar usuário', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container-perfil">
                <div className="container-pets"></div>
                <div className="info-perfil">
                    <div className="conteiner-configuracoes">
                        <div className="titulo-barra">
                            <h2>Configurações de Conta</h2>
                            <img src="/images/barra_marrom.png" className='barra-perfil' />
                            <h4>Dados do Perfil</h4>
                        </div>
                        <div className="sair-conta">
                            <button className="botao-sair-logout" onClick={handleLogout}>
                                <FiLogOut className='icon-logout' />
                            </button>
                        </div>
                    </div>

                    <div className="inputs-perfil">
                        <div className="inputs-perfil-1">
                            <div className="input-nome">
                                <p>Email*</p>
                                <div>
                                    <input 
                                        type="text" 
                                        name="email" 
                                        value={userData.email || ''} 
                                        onChange={handleChange} 
                                        disabled={!editMode} 
                                    />
                                </div>
                            </div>
                            <div className="input-nome">
                                <p>Nome</p>
                                <div className="input-edit">
                                    <input 
                                        type="text" 
                                        name="nome" 
                                        value={userData.nome || ''} 
                                        onChange={handleChange} 
                                        disabled={!editMode} 
                                    />
                                    <FaEdit className='icon-lapis' onClick={() => setEditMode(true)} />
                                </div>
                            </div>
                            <div className="input-nome">
                                <p>Senha</p>
                                <div className="input-edit">
                                    <input 
                                        type="password" 
                                        name="senha" 
                                        value={userData.senha || ''} 
                                        onChange={handleChange} 
                                        disabled={!editMode} 
                                    />
                                    <FaEdit className='icon-lapis' onClick={() => setEditMode(true)} />
                                </div>
                            </div>
                        </div>
                        <div className="inputs-perfil-2">
                            <div className="input-nome">
                                <p>CPF*</p>
                                <input 
                                    type="text" 
                                    name="cpf" 
                                    value={userData.cpf || ''} 
                                    onChange={handleChange} 
                                    disabled={!editMode} 
                                />
                            </div>
                            <div className="input-nome">
                                <p>Endereço</p>
                                <div className="input-edit">
                                    <input 
                                        type="text" 
                                        name="endereco" 
                                        value={userData.endereco || ''} 
                                        onChange={handleChange} 
                                        disabled={!editMode} 
                                    />
                                    <FaEdit className='icon-lapis' onClick={() => setEditMode(true)} />
                                </div>
                            </div>
                            <div className="input-nome">
                                <p>Telefone</p>
                                <div className="input-edit">
                                    <input 
                                        type="text" 
                                        name="telefone" 
                                        value={userData.telefone || ''} 
                                        onChange={handleChange} 
                                        disabled={!editMode} 
                                    />
                                    <FaEdit className='icon-lapis' onClick={() => setEditMode(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {editMode && (
                        <button className="botao-sair" onClick={handleSave}>
                            <div className="sair-conta">
                                Salvar Dados
                                <FaEdit className='icon-logout'/>
                            </div>
                        </button>
                    )}
                    <div className="excluir-conta">
                        <h4>Excluir conta permanentemente</h4>
                        <p>Deseja excluir sua conta e todos seus anúncios? Esta ação não pode ser desfeita.</p>
                        <button className="botao-excluir" onClick={() => setOpenModalExclui(true)}>Excluir</button>
                    </div>
                </div>
            </div>
            <ModalExclusaoDeConta isExclui={openModalExclui} setContaExcluiOpen={() => setOpenModalExclui(!openModalExclui)} onDelete={handleDelete} />
        </div>
    );
}

export default Perfil;