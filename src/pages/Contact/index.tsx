import { useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import styles from './styles.module.css';

export default function ContactPage() {
	useEffect(() => {
		document.title = 'Renan Santos | Contato';
	}, []);

	return (
		<>
			<PageHeader />
			<main className={`larguraLimitada ${styles.contato}`}>
				<h2 className={styles.titulo}>Me envie uma mensagem</h2>

				<form
					action='https://formsubmit.co/renansantos7@proton.me'
					method='POST'
				>
					<label>
						<span className={styles.label}>Nome</span>
						<input
							type='text'
							name='nome'
							className={styles.input}
							placeholder='Digite aqui seu nome'
						/>
					</label>

					<label>
						<span className={styles.label}>Email</span>
						<input
							type='email'
							name='nome'
							className={styles.input}
							placeholder='Digite aqui seu email'
						/>
					</label>

					<label>
						<span className={styles.label}>Mensagem</span>
						<textarea
							className={styles.textarea}
							name='mensagem'
							placeholder='Deixe aqui sua mensagem'
						></textarea>
					</label>

					<div className={styles.buttonContainer}>
						<button className={styles.btSubmit} type='submit'>
							Enviar
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
