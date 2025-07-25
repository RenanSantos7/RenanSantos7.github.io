import { useContext, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

import { DataContext } from '../../contexts/dataContext';
import { IPost } from '../../types';
import Metatags from '../../components/Metatags';
import PageHeader from '../../components/PageHeader';
import formatDate from '../../utils/formatDate';
import styles from './styles.module.css';

export default function Blog() {
	const params = useParams();

	const { posts } = useContext(DataContext);

	const selectedPost: IPost = posts.find(
		(item: IPost) => item.id == params.id,
	);

	const dataPub = formatDate(selectedPost.publication as string);

	useEffect(() => {
		const head = document.head;
		const metas = head.getElementsByTagName('meta');
		console.log(
			'Metas encontradas:',
			Array.from(metas).map(meta => ({
				property: meta.getAttribute('property'),
				content: meta.getAttribute('content'),
			})),
		);
	}, [selectedPost]);

	return (
		<>
			<Metatags
				title={`Renan Santos | ${selectedPost.title}`}
				image={selectedPost.img}
				description={selectedPost.description}
				type='article'
				published={new Date(selectedPost.publication)}
			/>

			<PageHeader page='blog' animRef={'#capa'} />

			<main className={styles.post}>
				<div
					id='capa'
					className={styles.header}
					style={{ backgroundImage: `url(${selectedPost.img})` }}
				>
					<div className={styles.header__wrapper}>
						<h1 className={styles.titulo}>{selectedPost.title}</h1>
						<time className={styles.publication}>{dataPub}</time>
						<div className={styles.tagList}>
							{selectedPost.tagList.map(tag => (
								<a key={tag} className={styles.tag}>
									#{tag}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className={styles.corpo}>
					<Markdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
						{selectedPost.content}
					</Markdown>
				</div>
			</main>
		</>
	);
}
