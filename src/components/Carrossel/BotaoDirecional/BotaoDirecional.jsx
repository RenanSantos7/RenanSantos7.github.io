import styles from './BotaoDirecional.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function BotaoDirecional({ direcao, aoClicar }) {
    const botaoClassName = `${styles.botaoDirecional} ${styles[direcao]}`;

    return (
        <button className={botaoClassName} onClick={aoClicar}>
            <FontAwesomeIcon
                icon={direcao === 'voltar' ? faChevronLeft : faChevronRight}
                className={styles.svg}
            />
        </button>
    );
}
