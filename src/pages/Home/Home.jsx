import { useEffect } from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import SecBlog from './components/SecBlog/SecBlog'
import Frase from './components/Frase/Frase'
import Hero from './components/Hero/Hero'
import Projetos from './components/Projetos/Projetos'
import SobreMim from './components/SobreMim/SobreMim'

export default function Home() {
    useEffect(() => {
        window.title = 'Renan Santos'
    }, [])

    return (
        <>
            <Cabecalho animRef={'#hero'}/>
            <Hero />
            <SobreMim />
            <Projetos />
            <Frase />
            <SecBlog />
        </>
    )
}
