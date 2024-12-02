import { createContext, useState } from "react";
import axios from 'axios';

export const PetContext = createContext();

export const PetContextProvider = ({ children }) => {
    const [pets, setPets] = useState([]);
    const [pet, setPet] = useState();

    const addPet = async (novoPet) => {
        try {
            const userLogado = JSON.parse(localStorage.getItem("userLogado"));
            if (!userLogado || !userLogado.id_usuario) {
                throw new Error("Usuário não está logado ou ID do usuário não encontrado");
            }

            const formData = new FormData();
            for (const key in novoPet) {
                formData.append(key, novoPet[key]);
            }
            formData.append('id_usuario', userLogado.id_usuario);

            const response = await axios.post("http://localhost:3000/pets", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setPets([...pets, response.data]);
        } catch (error) {
            console.error("Erro ao adicionar pet:", error);
        }
    };

    const fetchPets = async () => {
        try {
            const response = await axios.get("http://localhost:3000/pets");
            setPets(response.data);
        } catch (error) {
            console.error("Erro ao buscar pets:", error);
        }
    };

    return (
        <PetContext.Provider value={{
            pets,
            addPet,
            fetchPets,
            pet,
            setPet,
            setPets
        }}>
            {children}
        </PetContext.Provider>
    );
};