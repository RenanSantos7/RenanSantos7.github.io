import styles from './Frase.module.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DadosContext } from '../../../../contexts/dadosContext'
import geraInteiroAleatorio from '@/utils/geraInteiroAleatorio'

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
        <section className="bgSection larguraLimitada">
                <p className={styles.frase}>{frase}</p>
                <p className={styles.autor}>{autor}</p>
        </section>
    )
}
