import { useContext, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import { DataContext } from '../../contexts/dataContext';
import { IProject } from '../../types';
import PageHeader from '../../components/PageHeader';
import styles from './styles.module.css';
import Metatags from '../../components/Metatags';

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
			<Metatags
				title={`Renan Santos | ${selectedProject.title}`}
				image={selectedProject.img}
				description={selectedProject.description}
			/>

			<PageHeader animRef={'#banner'} />

			<main className={`${styles.project} larguraLimitada`}>
				<header className={styles.header}>
					<div className={styles.title}>
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
					<figure id='banner'>
						<img
							src={selectedProject.img}
							alt={selectedProject.alt}
						/>
						<figcaption className={styles.caption}>
							{selectedProject.alt}
						</figcaption>
					</figure>
				</header>
				<section className={styles.body}>
					<Markdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
						{selectedProject.content}
					</Markdown>
				</section>
			</main>
		</>
	);
}
