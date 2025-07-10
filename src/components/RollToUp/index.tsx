import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

export default function RollToUp() {
	const [visible, setVisible] = useState(false);

	function checkScroll() {
		const limit = 300;
		const position = window.scrollY;
		if (position >= limit) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', checkScroll);
	}, []);

	function backToTop() {
		window.scrollTo(0, 0);
	}

	return (
		<button
			className={`
                ${styles.botao}
                ${visible ? styles.aparente : ''}
            `}
			onClick={backToTop}
		>
			<span>Voltar para o topo</span>
			<FontAwesomeIcon icon={faArrowUp} />
		</button>
	);
}
