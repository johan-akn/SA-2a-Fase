import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Baguga'
const [diaDeHoje, setDiaDeHoje] = useState('quarta')


    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoje, setDiaDeHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}
