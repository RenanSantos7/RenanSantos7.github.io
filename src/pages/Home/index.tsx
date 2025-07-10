import { useEffect } from 'react';
import SecBlog from './components/SecBlog';
import Phrase from './components/Phrase';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import PageHeader from '../../components/PageHeader';

export default function Home() {
	useEffect(() => {
		document.title = 'Renan Santos';
	}, []);

	return (
		<>
			<PageHeader animRef={'#hero'} />
			<Hero />
			<AboutMe />
			<Projects />
			<Phrase />
			<SecBlog />
		</>
	);
}
