import { useEffect, useState } from 'react';

import frases from '../../../../data/frases.json';
import getRandomInt from '../../../../utils/getRandomInt';
import styles from './styles.module.css';

export default function Phrase() {
	const [frase, setFrase] = useState('');
	const [autor, setAutor] = useState('');

	function mudaFrase() {
		let i = getRandomInt(0, frases.length);
		setFrase(frases[i].frase);
		setAutor(frases[i].autor);
	}

	useEffect(() => {
		mudaFrase();
	}, []);

	return (
		<section className='bgSection larguraLimitada'>
			<p className={styles.frase}>{frase}</p>
			<p className={styles.autor}>{autor}</p>
		</section>
	);
}
