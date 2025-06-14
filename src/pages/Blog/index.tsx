import { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

import { DataContext } from '../../contexts/dataContext';
import Markdown from 'react-markdown';
import PageHeader from '../../components/PageHeader';
import formatDate from '../../utils/formatDate';
import styles from './styles.module.css';
import { IPost } from '../../types';

export default function Blog() {
	const params = useParams();

	const { posts } = useContext(DataContext);

	const selectedPost:IPost = posts.find((item: IPost) => item.id == params.id);

	const dataPub = formatDate(selectedPost.publication as string);

	useEffect(() => {
		document.title = `Renan Santos | ${selectedPost.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<PageHeader page='blog' animRef={'#capa'} />

			<main className={styles.post}>
				<div
					id='capa'
					className={styles.header}
					style={{ backgroundImage: `url(${selectedPost.img})` }}
				>
					<div className={styles.header__wrapper}>
						<h1 className={styles.titulo}>
							{selectedPost.title}
						</h1>
						<time className={styles.publication}>{dataPub}</time>
						<div className={styles.tagList}>
							{selectedPost.tagList.map(tag => (
								<a className={styles.tag}>#{tag}</a>
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
