import React, { Children } from 'react'
import './Navbar.css'
import './JanelaModal.css'


export default function JanelaModal({isOpen, setModalOpen, Children}) {

   if(isOpen){

    return(
    <div className='modal_conteiner'>
     <div className='conteiner_modal' >
      <form action="" className="cad-pet-container">

         <div className="titulo-cad-pet">
            <h2>Criar anúncio Pet</h2>
            <button onClick={setModalOpen} className = 'botao_modal'>X</button>
         </div>

         <div className="add-img">
            <p>add img</p>
         </div>

         <div className="inputs-pet">

            <div className="inpts-pet-1">

                  <label>Espécie:</label>
                  <input type="text" />

               <label>Raça:</label>
               <input type="text" />

               <label>Porte:</label>
               <input type="text" />
            </div>

            <div className="inpts-pet-2">

               <label>Nome do Pet:</label>
               <input type="text" />

               <label>Idade:</label>
               <input type="text" />

               <div className="genero-pet">
                  <label>Gênero:</label>
                  <div className="radio-pet">
                     <input type="radio" name='radio-genero' />
                     <p>Fêmea</p>
                     <input type="radio" name='radio-genero' />
                     <p>Macho</p>
                  </div>
               </div>
            </div>
         </div>
            <div className="descricao-pet">
               <label htmlFor="">Descrição:</label>
               <input type="text" />
            </div>
        {/* <p>Olá eu sou o Modal</p> */}
        {/* <input type="text" /> */}
        <div>
         {Children}
        </div>
      </form>
        
     </div>
    </div> 
        )
   }

   return null

}
