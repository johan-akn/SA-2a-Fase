import { createContext, useState } from "react";

export const PetContext = createContext()

export const PetContextProvider = ({children}) => {

const [ pets, setPets ] = useState([ ])
const [ pet, setPet ] = useState() 



const addPet = (novoPet) => {

    setPets([...pets, novoPet])

}




return(
    <PetContext.Provider value={{ 
               pets,
               addPet,
               pet,
               setPet
              }}>
                {children}
    </PetContext.Provider>
    )
}