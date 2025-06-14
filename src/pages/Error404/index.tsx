import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import PageHeader from '../../components/PageHeader';

export default function Error404() {
	useEffect(() => {
		document.title = 'Renan Santos';
	}, []);

	return (
		<>
			<PageHeader />
			<main className={`larguraLimitada flex-center ${styles.erro404}`}>
				<img className={styles.imagem} alt='' src='./404.svg' />
				<div className={styles.texto}>
					<h1>Viiiiixe...</h1>
					<p>Eu acho que essa página não exite</p>
					<p>
						Quer para para o <Link to='/'>Início</Link>?
					</p>
				</div>
			</main>
		</>
	);
}
