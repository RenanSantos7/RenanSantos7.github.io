import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { DataContext } from '../../contexts/dataContext';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { IProject } from '../../types';
import PageHeader from '../../components/PageHeader';
import rehypeHighlight from 'rehype-highlight';

export default function Projeto() {
	const params = useParams();

	const { projects } = useContext(DataContext);

	const selectedProject: IProject = projects.find(
		(item: IProject) => item.id == params.id,
	);

	useEffect(() => {
		document.title = `Renan Santos | ${selectedProject.title}`;
	}, []);

	return (
		<>
			<PageHeader animRef={'#capa'} />

			<main className={`${styles.projeto} larguraLimitada`}>
				<header className={styles.header}>
					<div className={styles.titulo}>
						<h1>{selectedProject.title}</h1>
						<div className={styles.links}>
							{selectedProject.deployLink && (
								<a
									href={selectedProject.deployLink}
									rel='noopener'
									target='blank'
								>
									Visitar projeto
									<sup>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
										/>
									</sup>
								</a>
							)}

							{selectedProject.repoLink && (
								<a
									href={selectedProject.repoLink}
									rel='noopener'
									target='blank'
								>
									Visitar repositório
									<sup>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
										/>
									</sup>
								</a>
							)}
						</div>
					</div>
					<figure id='capa'>
						<img
							src={selectedProject.img}
							alt={selectedProject.alt}
						/>
						<figcaption className={styles.legenda}>
							{selectedProject.alt}
						</figcaption>
					</figure>
				</header>
				<section className={styles.texto}>
					<Markdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
						{selectedProject.content}
					</Markdown>
				</section>
			</main>
		</>
	);
}
