import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import styles from './RolarParaCima.module.css'
import { useEffect, useState } from 'react'

export default function RolarParaCima() {

    const [aparente, setAparente] = useState(false)

    function checaScroll() {
        const limit = 300;
        const position = window.scrollY;
        if (position >= limit) {
            setAparente(true);
        } else {
            setAparente(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checaScroll)
    }, [])

    function voltarParaTopo() {
        window.scrollTo(0, 0)
    }

    return (
        <button
            className={`
                ${styles.botao}
                ${aparente ? styles.aparente : ''}
            `}
            onClick={voltarParaTopo}
        >
            <span>Voltar para o topo</span>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}
