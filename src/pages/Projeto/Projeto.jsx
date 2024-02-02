import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DadosContext } from '../../contexts/dadosContext'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Cabecalho from '../../components/Cabecalho/Cabecalho'

export default function Projeto() {

    const parametros = useParams()

    const {projetos} = useContext(DadosContext)

    const projetoSelecionado = projetos.find(item => (
        item.id == parametros.id
    ))

    useEffect(() => {
        document.title = `Renan Santos | ${projetoSelecionado.titulo}`
    }, [])

    return (
      <>
            <Cabecalho animRef={'#capa'} />
    
            <main className={`${styles.projeto} larguraLimitada`}>
                <header className={styles.header}>
                    <div className={styles.titulo}>
                        <h1>{projetoSelecionado.titulo}</h1>
                        <a href={projetoSelecionado.link}>Visitar projeto</a>
                    </div>
                    <figure id='capa'>
                        <img src={projetoSelecionado.img} alt={projetoSelecionado.alt} />
                        <figcaption className={styles.legenda}>{projetoSelecionado.alt}</figcaption>
                    </figure>
                </header>
                <section className={styles.texto}>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {projetoSelecionado.texto}
                    </Markdown>
                </section>
            </main>
      </>
    )
}
