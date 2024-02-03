import { useEffect, useState } from 'react'
import styles from './Frase.module.css'
import { useContext } from 'react'
import geraInteiroAleatorio from '@/utils/geraInteiroAleatorio'
import { DadosContext } from '../../../../contexts/dadosContext'

export default function Frase() {
    const [frase, setFrase] = useState('')
    const [autor, setAutor] = useState('')

    const { frases } = useContext(DadosContext)

    function mudaFrase() {
        let i = geraInteiroAleatorio(0, frases.length);
        setFrase(frases[i].frase)
        setAutor(frases[i].autor)
    }

    useEffect(() => {
        mudaFrase()
    }, [])

    return (
        <section className="bgSection">
            <article className={`larguraLimitada ${styles.container}`}>
                <p className={styles.frase}>{frase}</p>
                <p className={styles.autor}>{autor}</p>
            </article>
        </section>
    )
}
