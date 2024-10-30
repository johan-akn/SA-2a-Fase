import { createContext, useState } from "react";

export const PetContext = createContext()

export const PetContextProvider = ({children}) => {

const [ pets, setPets ] = useState([ ])


const addPet = (novoPet) => {

    setPets([...pets, novoPet])

}


function CadastrarPet(){
    nomePet: inp
}


return(
    <PetContext.Provider value={{ 
               pets,
               addPet,
              }}>
                {children}
    </PetContext.Provider>
    )
}