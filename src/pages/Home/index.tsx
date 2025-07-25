import { useEffect } from 'react';
import SecBlog from './components/SecBlog';
import Phrase from './components/Phrase';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import PageHeader from '../../components/PageHeader';
import Metatags from '../../components/Metatags';

export default function Home() {
	useEffect(() => {
		document.title = 'Renan Santos';
	}, []);

	return (
		<>
			<Metatags
				title='Renan Santos'
				description='Portifólio de Dev Front-End de Renan Santos'
				keywords={[
					'Front-End',
					'developer',
					'desenvolvedor',
					'programador',
					'react',
					'JavaScript',
					'html',
					'css',
				]}
			/>
			<PageHeader animRef={'#hero'} />
			<Hero />
			<AboutMe />
			<Projects />
			<Phrase />
			<SecBlog />
		</>
	);
}
