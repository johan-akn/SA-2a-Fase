import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

//   const [diaDeHoje, setDiaDeHoje] = useState('quarta')
  const [logado, setLogado] = useState(false)
  const [mudarTipo, setMudarTipo] = useState(false)

  function Logar(){
    setLogado(!logado)
  }
  
  function MostrarSenha(){
    if(inputSenha.type == 'password'){
      setMudarTipo(!mudarTipo)
      inputSenha.type = 'text'
    }
    else if(inputSenha.type == 'text'){
      setMudarTipo(!mudarTipo)
      inputSenha.type = 'password'
    }
  }

    return(
        <GlobalContext.Provider value={{ logado, Logar, mudarTipo, MostrarSenha}}>
            {children}
        </GlobalContext.Provider>
    )
}
