import { Link } from 'react-router-dom'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import styles from './Erro404.module.css'
import img404 from './404.svg'
import { useEffect } from 'react'

export default function Erro404() {
    
    useEffect(() => {
        window.title = 'Renan Santos'
    }, [])

    return (
        <>
            <Cabecalho />
            <main className={`larguraLimitada flex-center ${styles.erro404}`}>
                <img className={styles.imagem} alt='' src={img404} />
                <div className={styles.texto}>
                    <h1>Viiiiixe...</h1>
                    <p>Eu acho que essa página não exite</p>
                    <p>Quer para para o <Link to='/'>Início</Link>?</p>
                </div>
            </main>
        </>
    )
}
