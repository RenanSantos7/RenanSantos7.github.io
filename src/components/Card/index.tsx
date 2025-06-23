import { Link } from 'react-router-dom';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { IPost, IProject } from '../../types';
import styles from './styles.module.css';

type CardProps =
	| {
			type: 'projeto';
			obj: IProject;
	  }
	| {
			type: 'blog';
			obj: IPost;
	  };

export default function Card({ type, obj }: CardProps) {
	function getIconTech(name: string, i: number) {
		return (
			<img
				key={i}
				className={styles.icoTec}
				src={`/assets/tecnologias/${name}.svg`}
				alt=''
			/>
		);
	}

	return (
		<article className={`${styles.card} card-animado`}>
			<Link to={`${type}/${obj.id}`}>
				<figure className={styles.imagem}>
					<img className={styles.capa} alt='' src={obj.img} />
				</figure>
				<div className={styles.containerTecnologias}>
					{type === 'projeto' ? (
						<div className={styles.wrapperTecnologias}>
							{obj.technologies.map((tec, index) =>
								getIconTech(tec, index),
							)}
						</div>
					) : null}
				</div>
				<div className={styles.texto}>
					<h3>{obj.title}</h3>
					<Markdown rehypePlugins={[rehypeRaw]}>
						{obj.description}
					</Markdown>
				</div>
			</Link>
		</article>
	);
}
