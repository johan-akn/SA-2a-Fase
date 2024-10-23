import React from 'react'
import Navbar from '../components/Navbar'
import './Perfil.css'

function Perfil() {
  return (
    <div>
        <Navbar />
        <div className="container-perfil">
            <h2>Perfil</h2>
            <div className="container-pets">
                
            </div>
            <div className="info-perfil">
                <h2>Configurações de Conta</h2>
                <p>Dados do Perfil</p>

                <div className="inputs-perfil">
                    <div className="inputs-perfil-1">
                        <div className="input-nome">
                            <p>Nome</p>
                            <input type="text" />
                        </div>

                        <div className="input-nome">
                            <p>Email</p>
                            <input type="email" />
                        </div>

                        <div className="input-nome">
                            <p>Senha</p>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="inputs-perfil-2">
                        <div className="input-nome">
                            <p>CPF</p>
                            <input type="text" />
                        </div>

                        <div className="input-nome">
                            <p>Endereço</p>
                            <input type="text" />
                        </div>

                        <div className="input-nome">
                            <p>Telefone</p>
                            <input type="text" />
                        </div>

                    </div>
                </div>
                <button className="botao-sair">Sair da Conta</button>
                <div className="excluir-conta">
                    <h4>Excluir conta permanentemente</h4>
                    <p>Deseja excluir sua conta e todos seus anúncios? Esta ação não pode ser desfeita.</p>
                    <button className="botao-excluir">Excluir Conta</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Perfil