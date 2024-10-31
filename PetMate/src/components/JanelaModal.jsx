import React, { useState } from 'react';
import './Navbar.css';
import './JanelaModal.css';
import { BiSolidImageAdd } from "react-icons/bi";

export default function JanelaModal({ isOpen, setModalOpen, children }) {
  if (!isOpen) {
    return null;
  }

  const [inptPetEspecie, setInptPetEspecie] = useState('');
  const [inptPetNome, setInptPetNome] = useState('');
  const [inptPetRaca, setInptPetRaca] = useState('');
  const [inptPetIdade, setInptPetIdade] = useState('');
  const [inptPetPorte, setInptPetPorte] = useState('');
  const [inptPetGenero, setInptPetGenero] = useState('');
  const [inptPetDescricao, setInptPetDescricao] = useState('');
  const [aceitarTermos, setAceitarTermos] = useState(false);
  const [petImagem, setPetImagem] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  // Cria uma URL temporária para exibir a imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPetImagem(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImagePreviewUrl(previewUrl)
    }

  }
  
  const CadastrarPet = (e) => {
    e.preventDefault();
    if(aceitarTermos == true){

    const novoPet = {
      especie: inptPetEspecie,
      nome: inptPetNome,
      raca: inptPetRaca,
      idade: inptPetIdade,
      porte: inptPetPorte,
      genero: inptPetGenero,
      descricao: inptPetDescricao,
      // Imagem ao objeto
      imagem: petImagem,
      termos: aceitarTermos,
    };
    console.log('Pet cadastrado:', novoPet);
    setModalOpen(false);
  }

  };

  return (
    <div className='modal_conteiner'>
      <div className='conteiner_modal'>
        <form className="cad-pet-container" onSubmit={CadastrarPet}>
          <div className="titulo-cad-pet">
            <div className="titulo-barra-pet">
              <h2>Criar anúncio para Pet</h2>
              <img src="/images/barra_marrom.png" className='barra-pet'/>
            </div>
            <button onClick={() => setModalOpen(false)} className='botao_modal'>{'<'}</button>
          </div>

          <div className="add-img">
          {/* Exibe a imagem de pré-visualização se uma imagem tiver sido selecionada */}
            {imagePreviewUrl ? (
              <img src={imagePreviewUrl} alt="Pré-visualização do Pet" className="preview-image" />
            ) : (
              <>
                <label htmlFor="upload-image" className="icon-add">
                  <BiSolidImageAdd size={50} />
                </label>
                <p>Adicione uma foto do seu Pet!</p>
              </>
            )}
            <input
              id="upload-image"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {/* Exibe o nome da imagem se uma imagem tiver sido selecionada */}
            {petImagem && <p>Imagem selecionada: {petImagem.name}</p>}
          </div>

          <div className="inputs-pet">
            <div className="inpts-pet-1">
              <div className="linha-inpt">
                <div className="label-inpt">
                  <label>Espécie:</label>
                  <input 
                    type="text"
                    value={inptPetEspecie}
                    onChange={(e) => setInptPetEspecie(e.target.value)}
                  />
                </div>

                <div className="label-inpt">
                  <label>Nome do Pet:</label>
                  <input 
                    type="text" 
                    value={inptPetNome}
                    onChange={(e) => setInptPetNome(e.target.value)}
                  />
                </div>
              </div>

              <div className="linha-inpt">
                <div className="label-inpt">
                  <label>Raça:</label>
                  <input 
                    type="text" 
                    value={inptPetRaca}
                    onChange={(e) => setInptPetRaca(e.target.value)}
                  />
                </div>

                <div className="label-inpt">
                  <label>Idade:</label>
                  <input 
                    type="text" 
                    value={inptPetIdade}
                    onChange={(e) => setInptPetIdade(e.target.value)}
                  />
                </div>
              </div>

              <div className="linha-inpt">
                <div className="label-inpt">
                  <label>Porte:</label>
                  <select 
                    name="selectPorte" 
                    value={inptPetPorte}
                    onChange={(e) => setInptPetPorte(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="pequeno">Pequeno</option>
                    <option value="médio">Médio</option>
                    <option value="grande">Grande</option>
                  </select>
                </div>

                <div className="genero-pet">
                  <label>Gênero:</label>
                  <div className="radio-pet">
                    <input 
                      type="radio" 
                      name='radio-genero' 
                      className='radio-genero' 
                      value="fêmea"
                      checked={inptPetGenero === 'fêmea'}
                      onChange={() => setInptPetGenero('fêmea')}
                    />
                    <p>Fêmea</p>
                    <input 
                      type="radio" 
                      name='radio-genero' 
                      className='radio-genero'
                      value="macho"
                      checked={inptPetGenero === 'macho'}
                      onChange={() => setInptPetGenero('macho')}
                    />
                    <p>Macho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="descricao-pet">
            <label>Descrição:</label>
            <input 
              type="text" 
              placeholder='Adicione uma descrição para seu anúncio!' 
              value={inptPetDescricao}
              onChange={(e) => setInptPetDescricao(e.target.value)}
            />
          </div>

          <div className="termos-cadastro-pet">
            <div className="termos-pet">
              <input 
                type="checkbox" 
                checked={aceitarTermos}
                onChange={(e) => setAceitarTermos(e.target.checked)}
              />
              <p className='termos-1'>
                Ao preencher o formulário acima você concorda com os nossos
              </p>
              <a href="#" className='link-termos'>Termos de Uso.</a>
            </div>
          </div>

          <button type="submit" className='botao-cad-pet'>Cadastrar Pet</button>
        </form>
      </div>
    </div>
  );
}
