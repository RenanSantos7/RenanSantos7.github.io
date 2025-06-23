import { useState, MouseEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styles from './styles.module.css';

export default function PageHeaderMobile() {
	const [menuAberto, setMenuAberto] = useState(false);

	const menuTop = menuAberto ? '0' : '-32rem';

	function alternarMenu(evt: MouseEvent<HTMLButtonElement>) {
		evt.preventDefault();
		setMenuAberto(!menuAberto);
	}

	function fecharMenu() {
		setMenuAberto(false);
	}

	return (
		<header className={styles.cabecalho}>
			<div className={`larguraLimitada ${styles.barra}`}>
				<button
					type='button'
					title='Menu'
					className={styles.botao}
					onClick={alternarMenu}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>

				<Link className={`navLink ${styles.contato}`} to='contato'>
					Contate-me
				</Link>
			</div>

			<div className={styles.container} style={{ top: `${menuTop}` }}>
				<div className={styles.botaoFechar}>
					<FontAwesomeIcon icon={faXmark} onClick={fecharMenu} />
				</div>

				<div className={styles.links}>
					<div className={styles.links__internos}>
						<HashLink
							className={styles.navLink}
							to='/'
							onClick={fecharMenu}
						>
							Início
						</HashLink>
						<HashLink
							className={styles.navLink}
							to='/#sobremim'
							onClick={fecharMenu}
						>
							Sobre mim
						</HashLink>
						<HashLink
							className={styles.navLink}
							to='/#projetos'
							onClick={fecharMenu}
						>
							Projetos
						</HashLink>
						<HashLink
							className={styles.navLink}
							to='/#blog'
							onClick={fecharMenu}
						>
							Blog
						</HashLink>
					</div>

					<hr className={styles.divisoria} />

					<div className={styles.links__externos}>
						<a
							target='_blank'
							rel='noopener'
							aria-label='LinkedIn'
							id='LinkedIn'
							href='https://www.linkedin.com/in/renan-santos-7332b5255/'
							onClick={fecharMenu}
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
							onClick={fecharMenu}
						>
							<FontAwesomeIcon
								icon={faGithub}
								aria-hidden='true'
							/>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
