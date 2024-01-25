import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'
import Blog from './components/Blog/Blog'
import Frase from './components/Frase/Frase'
import Hero from './components/Hero/Hero'
import Projetos from './components/Projetos/Projetos'
import SobreMim from './components/SobreMim/SobreMim'

export default function Home() {
    return (
        <>
            <Cabecalho animRef={'#hero'}/>
            <Hero />
            <SobreMim />
            <Projetos />
            <Frase />
            <Blog />
        </>
    )
}
