import { createContext } from "react";
import posts from '../data/blogposts.json'
import projetos from '../data/projetos.json'
import frases from '../data/frases.json'

export const DadosContext = createContext()
DadosContext.displayName = 'Dados Portifolio'

export function DadosProvider({children}) {
    return (
        <DadosContext.Provider value={{
            posts,
            projetos,
            frases
        }}>
            {children}
        </DadosContext.Provider>
    )
}
