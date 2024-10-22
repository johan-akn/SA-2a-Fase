import Navbar from '../components/Navbar'
import {useContext} from 'react'
// import { useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Dragoes() {
    const {diaDeHoje, setDiaDeHoje} = useContext(GlobalContext)

    function TrocarDia(){
        let dia = prompt('Que dia é hoje?')
        setDiaDeHoje(dia)
    }

  return (
    <div>
        <Navbar />
      <h1>Dragões</h1>
      <p>Porque eles são legais, mas infelizmente é {diaDeHoje}</p>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEsWmpNvHVMIkuWg8hvJKxCa5u5SOxRkZIA&s" alt="" />
      </div>
      <button onClick={TrocarDia}>Trocar dia</button>
    </div>
  )
}

export default Dragoes
