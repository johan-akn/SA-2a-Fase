import { createContext, useState } from "react";
import InputMask from 'react-input-mask';

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

//   const [diaDeHoje, setDiaDeHoje] = useState('quarta')
  const [logado, setLogado] = useState(false)
  const [mudarTipo, setMudarTipo] = useState(false)

  const[inptNomeCadastro, setInptNomeCadastro] = useState('')
  const[inptEmailCadastro, setInptEmailCadastro] = useState('')
  const[inptSenhaCadastro, setInptSenhaCadastro] = useState('')
  const[inptTelefoneCadastro, setInptTelefoneCadastro] = useState('')
  const[inptEnderecoCadastro, setInptEnderecoCadastro] = useState('')
  const[inptCpfCadastro, setInptCpfCadastro] = useState('')

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



    return(
        <GlobalContext.Provider value={{ 
              logado,
              Logar,
              mudarTipo,
              MostrarSenha,
              inptNomeCadastro,
              setInptNomeCadastro,
              inptEmailCadastro,
              setInptEmailCadastro,
              inptSenhaCadastro,
              setInptSenhaCadastro,
              inptTelefoneCadastro,
              setInptTelefoneCadastro,
              inptEnderecoCadastro,
              setInptEnderecoCadastro,
              inptCpfCadastro,
              setInptCpfCadastro,

              PhoneInput
          }}>
            {children}
        </GlobalContext.Provider>
    )
}
