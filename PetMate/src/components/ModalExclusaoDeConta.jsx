import React, { useState } from 'react'
import './ModalExclusaoDeConta.css'

export default function ModalExclusaoDeConta({ isExclui, setContaExcluiOpen}) {

    if (!isExclui) {
        return null
    }
  return (
    <div>
        <div className='modal_conteiner_Exclui'>
      <div className='conteiner_modal_Exclui'>
        <div className="texto_Exclui">
        <h1>Deseja a Exclusão de sua conta?</h1>
        </div>
        <div className='Botao_Exclui'>
          <button className='botao_modal_Exclui'>Confirmar</button>
      <button onClick={() => setContaExcluiOpen(false)} className='botao_modal_Exclui'>{'Cancelar'}</button>
        </div>
      </div>
    </div>
    </div>
  )
}
