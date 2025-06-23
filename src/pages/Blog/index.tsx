import { useContext, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

import { DataContext } from '../../contexts/dataContext';
import { IPost } from '../../types';
import Markdown from 'react-markdown';
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
		window.scrollTo(0, 0);
	}, []);

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
			<Helmet>
				<title>Renan Santos | {selectedPost.title}</title>
				<meta property='og:title' content={selectedPost.title} />
				<meta property='og:image' content={selectedPost.img} />
				<meta
					property='og:description'
					content={selectedPost.description}
				/>
				<meta property='og:type' content='article' />
			</Helmet>
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
								<a key={tag} className={styles.tag}>#{tag}</a>
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
