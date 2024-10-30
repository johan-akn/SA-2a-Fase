import React, { useState } from 'react';
import './Navbar.css';
import './JanelaModal.css';
import { BiSolidImageAdd } from "react-icons/bi";

export default function JanelaModal({ isOpen, setModalOpen, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal_conteiner'>
      <div className='conteiner_modal'>
        <form className="cad-pet-container">
          <div className="titulo-cad-pet">
            <div className="titulo-barra-pet">
              <h2>Criar anúncio para Pet</h2>
              <img src="/images/barra_marrom.png" className='barra-pet'/>
            </div>
            <button onClick={setModalOpen} className='botao_modal'>{'<'}</button>
          </div>

          <div className="add-img">
            {/* <BiSolidImageAdd className='icon-add' /> */}
            <img src="/images/add-img.png" className='icon-add'/>
            <p>Adicione uma foto do seu Pet!</p>
          </div>

          <div className="inputs-pet">
            <div className="inpts-pet-1">
              <div className="linha-inpt">
                <div className="label-inpt">
                  <label>Espécie:</label>
                  <input type="text" />
                </div>

                <div className="label-inpt">
                  <label>Nome do Pet:</label>
                  <input type="text" />
                </div>
              </div>

              <div className="linha-inpt">
                <div className="label-inpt">
                  <label>Raça:</label>
                  <input type="text" />
                </div>

                <div className="label-inpt">
                  <label>Idade:</label>
                  <input type="text" />
                </div>
              </div>

              <div className="linha-inpt">
                <div className="label-inpt">
                  <label>Porte:</label>
                  <select name="selectPorte">
                    <option value=""></option>
                    <option value="pequeno">Pequeno</option>
                    <option value="médio">Médio</option>
                    <option value="grande">Grande</option>
                  </select>
                </div>

                <div className="genero-pet">
                  <label>Gênero:</label>
                  <div className="radio-pet">
                    <input type="radio" name='radio-genero' className='radio-genero' />
                    <p>Fêmea</p>
                    <input type="radio" name='radio-genero' className='radio-genero'/>
                    <p>Macho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="descricao-pet">
            <label>Descrição:</label>
            <input type="text" placeholder='Adicione uma descrição para seu anúncio!' />
          </div>

          <div className="termos-cadastro-pet">
            <div className="termos-pet">
              <input type="checkbox" />
              <p className='termos-1'>
                Ao preencher o formulário acima você concorda com os nossos
              </p>
              <a href="#" className='link-termos'>Termos de Uso.</a>
            </div>
          </div>

          <button type="submit" className='botao-cad-pet'>Cadastrar Pet</button>
          
          <div>
          </div>
        </form>
      </div>
    </div>
  );
}
