import { createContext, useState, useEffect } from "react";
import InputMask from 'react-input-mask';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const [logado, setLogado] = useState(() => {
        const savedLogado = localStorage.getItem("logado");
        return savedLogado !== null ? JSON.parse(savedLogado) : false;
    });
    const [mudarTipo, setMudarTipo] = useState(false);
    const [userLogado, setUserLogado] = useState(() => {
        const savedUserLogado = localStorage.getItem("userLogado");
        return savedUserLogado !== null ? JSON.parse(savedUserLogado) : null;
    });
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        localStorage.setItem("logado", JSON.stringify(logado));
        localStorage.setItem("userLogado", JSON.stringify(userLogado));
    }, [logado, userLogado]);

    const Logar = (email, senha) => {
        const usuario = usuarios.find((user) => user.email === email);
        if (usuario) {
            if (usuario.senha === senha) {
                setUserLogado(usuario);
                setLogado(true);
                localStorage.setItem("logado", JSON.stringify(true));
                localStorage.setItem("userLogado", JSON.stringify(usuario));
            } else {
                return { error: "Senha incorreta" };
            }
        } else {
            return { error: "Usuário não encontrado" };
        }
    };

    function MostrarSenha() {
        const inputSenha = document.getElementById('inputSenha');
        if (inputSenha.type === 'password') {
            setMudarTipo(true);
            inputSenha.type = 'text';
        } else {
            setMudarTipo(false);
            inputSenha.type = 'password';
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
    };

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
    };

    return (
        <GlobalContext.Provider value={{
            mudarTipo,
            MostrarSenha,
            logado,
            Logar,
            PhoneInput,
            CpfInput,
            userLogado,
            setUserLogado
        }}>
            {children}
        </GlobalContext.Provider>
    );
};