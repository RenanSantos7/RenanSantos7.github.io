import styles from './Blog.module.css'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DadosContext } from '../../contexts/dadosContext'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import extraiData from '../../utils/extraiData'
import Cabecalho from '../../components/Cabecalho/Cabecalho'

export default function Blog() {

    const parametros = useParams()

    const { posts } = useContext(DadosContext)

    const postSelecionado = posts.find(item => (
        item.id == parametros.id
    ))
    
    const dataPub = extraiData(postSelecionado.publicacao)

    return (
        <>
            <Cabecalho page='blog' animRef={'#capa'} />
    
            <main className={styles.post}>
                <div
                    id='capa'
                    className={styles.header}
                    style={{backgroundImage: `url(${postSelecionado.img})`}}
                    >
                    <div className={styles.header__wrapper}>
                        <h1 className={styles.titulo}>{postSelecionado.titulo}</h1>
                        <time className={styles.publication}>{dataPub}</time>
                        <div className={styles.tagList}>
                            {postSelecionado.tagList.forEach(tag => {
                                return <a className={styles.tag}>#{tag}</a>
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.corpo}>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {postSelecionado.conteudo}
                    </Markdown>
                </div>
            </main>
        </>
    )
}
