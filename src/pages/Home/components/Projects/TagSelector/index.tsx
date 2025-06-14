import { useEffect, useState } from 'react';
import TagSelectorMobile from './mobile';
import TagSelectorPadrao from './default';

export interface TagSelectorProps {
	selectedTag: string;
	onSelect: (arg: string) => void;
}

export default function TagSelector({
	selectedTag,
	onSelect,
}: TagSelectorProps) {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	function onResize() {
		setScreenWidth(window.innerWidth);
	}

	if (screenWidth <= 700) {
		return (
			<TagSelectorMobile selectedTag={selectedTag} onSelect={onSelect} />
		);
	}

	if (screenWidth > 700) {
		return (
			<TagSelectorPadrao selectedTag={selectedTag} onSelect={onSelect} />
		);
	}
}
