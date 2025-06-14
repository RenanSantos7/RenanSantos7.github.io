import { useEffect, useState } from 'react';

import Technologie from '../../../../components/Technology';
import calculaMinhaIdade from '../../../../utils/calculaIdade';
import defineSaudacao from '../../../../utils/saudacao';
import styles from './Hero.module.css';
import technologies from '../../../../data/technologies.json';

export default function Hero() {
	const [greeting, setGreeting] = useState('Olá');
	const [age, setAge] = useState(33);

	useEffect(() => {
		const myAge = calculaMinhaIdade();
		const greeting = defineSaudacao();
		setAge(myAge);
		setGreeting(greeting);
	}, []);

	return (
		<section id='hero' className={`larguraLimitada ${styles.hero}`}>
			<div className={styles.dados}>
				<h1>Renan Santos</h1>
				<p>
					{greeting}, meu nome é Renan, tenho {age} anos e sou um
					desenvolvedor Front-End.
				</p>

				<a
					href='https://drive.google.com/file/d/13S2fplOw7y0D4N16w2AubSPxJwRhb4Xn/view?usp=drive_link'
					target='_blank'
					rel='noopener noreferer'
					className={styles.curriculo}
				>
					Meu currículo
				</a>
			</div>

			<div className={styles.tecnologias}>
				{technologies.map(tech => (
					<Technologie key={tech.id} item={tech} />
				))}
			</div>
		</section>
	);
}
