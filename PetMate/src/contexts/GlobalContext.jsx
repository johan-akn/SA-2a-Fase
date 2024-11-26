import { createContext, useState } from "react";
import InputMask from 'react-input-mask';

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

//   const [diaDeHoje, setDiaDeHoje] = useState('quarta')
  const [logado, setLogado] = useState(false)
  const [mudarTipo, setMudarTipo] = useState(false)
  const [userLogado, setUserLogado] = useState(null);



  const Logar = (user) => {
      setUserLogado(user);
      setLogado(!logado)
  };


  
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


const PhoneInput = () => {
  return (
    <div>
      <InputMask
        mask="(99) 99999-9999"
        placeholder="(XX) XXXXX-XXXX"
      >
        {(inputProps) => <input {...inputProps} type="tel" />}
      </InputMask>
    </div>
  );
  }

const CpfInput = () => {
  return (
    <div>
      <InputMask
        mask="999.999.999-99"
        placeholder="XXX.XXX.XXX-XX"
      >
        {(inputProps) => <input {...inputProps} type="text" />}
      </InputMask>
    </div>
  );
  }



    return(
        <GlobalContext.Provider value={{
              mudarTipo,
              MostrarSenha,
              logado,
              Logar,
              PhoneInput,
              CpfInput,
              userLogado,
          }}>
            {children}
        </GlobalContext.Provider>
    )
}
