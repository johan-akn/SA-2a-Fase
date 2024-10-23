import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

//   const [diaDeHoje, setDiaDeHoje] = useState('quarta')
  const [logado, setLogado] = useState(false)

  function Logar(){
    setLogado(!logado)
  }
  

    return(
        <GlobalContext.Provider value={{ logado, Logar}}>
            {children}
        </GlobalContext.Provider>
    )
}
