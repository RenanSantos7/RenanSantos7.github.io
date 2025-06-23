import { useContext, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import { DataContext } from '../../contexts/dataContext';
import { IProject } from '../../types';
import PageHeader from '../../components/PageHeader';
import styles from './styles.module.css';

export default function ProjectPage() {
	const params = useParams();

	const { projects } = useContext(DataContext);

	const selectedProject: IProject = projects.find(
		(item: IProject) => item.id == params.id,
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Renan Santos | {selectedProject.title}</title>
				<meta property='og:title' content={selectedProject.title} />
				<meta property='og:image' content={selectedProject.img} />
				<meta
					property='og:description'
					content={selectedProject.description}
				/>
				<meta property='og:type' content='article' />
			</Helmet>
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
