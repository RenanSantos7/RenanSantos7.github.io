import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { DataContext } from '../../contexts/dataContext'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projeto() {

    const parametros = useParams()

    const { projetos } = useContext(DataContext)

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
                        <div className={styles.links}>
                            {projetoSelecionado.linkDeploy &&
                                <a
                                    href={projetoSelecionado.linkDeploy}
                                    rel='noopener'
                                    target='blank'
                                >Visitar projeto
                                    <sup>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </sup>
                                </a>
                            }

                            {projetoSelecionado.linkRepositorio &&
                                <a
                                    href={projetoSelecionado.linkRepositorio}
                                    rel='noopener'
                                    target='blank'
                                >Visitar repositório
                                    <sup>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </sup>
                                </a>
                            }
                        </div>
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
