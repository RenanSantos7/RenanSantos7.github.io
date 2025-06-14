import { CSSProperties, useLayoutEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { HeaderProps } from '..';
import styles from './styles.module.css';

export default function CabecalhoPadrao({ animRef, page }: HeaderProps) {
	gsap.registerPlugin(ScrollTrigger);

	let anim: CSSProperties = {
		height: '50px',
		boxShadow: '0 0 15px var(--shadow)',
		backgroundColor: 'var(--bg-geral)',
	};

	let trigger: ScrollTrigger.Vars = {
		trigger: animRef,
		scrub: true,
		start: 'bottom 800px',
		end: 'bottom 400px',
	};

	let bg: CSSProperties = { backgroundColor: 'var(--bg-geral)' };

	if (page === 'blog') {
		bg = {
			background: 'var(--bg-geral-transp)',
			height: '50px',
		};

		anim = {
			boxShadow: '0 0 15px var(--shadow)',
			background: 'var(--bg-geral)',
		};

		trigger.start = 'bottom 600px';
	}

	useLayoutEffect(() => {
		gsap.timeline({
			scrollTrigger: trigger,
		}).to('#cabecalho', anim);

		return () => {
			gsap.killTweensOf('#cabecalho');
		};
	}, []);

	return (
		<header id='cabecalho' className={styles.cabecalho} style={bg}>
			<div className={`larguraLimitada ${styles.container}`}>
				<Link className={styles.btContato} to='contato'>
					Contate-me
				</Link>
				<nav className={styles.links}>
					<div className={styles.links__internos}>
						<HashLink className={styles.navLink} to='/'>
							Início
						</HashLink>
						<HashLink className={styles.navLink} to='/#sobremim'>
							Sobre mim
						</HashLink>
						<HashLink className={styles.navLink} to='/#projetos'>
							Projetos
						</HashLink>
						<HashLink className={styles.navLink} to='/#blog'>
							Blog
						</HashLink>
					</div>

					<hr className='links__divisoria' />

					<div className={styles.links__externos}>
						<a
							target='_blank'
							rel='noopener'
							aria-label='LinkedIn'
							id='LinkedIn'
							href='https://www.linkedin.com/in/renan-santos-7332b5255/'
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								aria-hidden='true'
							/>
						</a>
						<a
							target='_blank'
							rel='noopener'
							id='github'
							aria-label='Github'
							href='https://github.com/RenanSantos7'
						>
							<FontAwesomeIcon
								icon={faGithub}
								aria-hidden='true'
							/>
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
