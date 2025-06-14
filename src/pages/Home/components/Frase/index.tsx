import { useContext, useEffect, useState } from 'react';

import frases from '../../../../data/frases.json';
import geraInteiroAleatorio from '../../../../utils/geraInteiroAleatorio';
import styles from './Frase.module.css';

export default function Frase() {
	const [frase, setFrase] = useState('');
	const [autor, setAutor] = useState('');

	function mudaFrase() {
		let i = geraInteiroAleatorio(0, frases.length);
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
