import styles from './Rodape.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link href="contato" className={styles.contato}>
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                <span>Contato</span>
            </Link>

            <a href="https://www.linkedin.com/in/renan-santos-7332b5255/" className={styles.contato}>
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                <span>Linkedin</span>
            </a>

            <a className={styles.contato} href="https://github.com/RenanSantos7">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                <span>Github</span>
            </a>
        </footer>
    )
}
