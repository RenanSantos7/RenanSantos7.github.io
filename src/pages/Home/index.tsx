import { useEffect } from 'react';
import SecBlog from './components/SecBlog';
import Frase from './components/Frase';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import PageHeader from '../../components/PageHeader';

export default function Home() {
    useEffect(() => {
        //@ts-ignore
		window.title = 'Renan Santos';
	}, []);

	return (
		<>
			<PageHeader animRef={'#hero'} />
			<Hero />
			<AboutMe />
			<Projects />
			<Frase />
			<SecBlog />
		</>
	);
}
