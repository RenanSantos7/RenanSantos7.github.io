import { useEffect, useState } from 'react';

import PageHeaderMobile from './mobile';
import CabecalhoPadrao from './default';

export interface HeaderProps {
	animRef?: gsap.DOMTarget;
	page?: string;
}

export default function PageHeader({ animRef, page }: HeaderProps) {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	function onResize() {
		setScreenWidth(window.innerWidth);
	}

	if (screenWidth <= 700) {
		return <PageHeaderMobile />;
	}

	if (screenWidth > 700) {
		return <CabecalhoPadrao animRef={animRef} page={page} />;
	}
}
