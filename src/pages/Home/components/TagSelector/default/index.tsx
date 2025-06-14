import { useContext } from 'react';

import classNames from 'classnames';

import { DataContext } from '../../../../../contexts/dataContext';
import { IProject } from '../../../../../types';
import { TagSelectorProps } from '..';
import styles from './styles.module.css';

export default function TagSelectorDefault({
	selectedTag,
	onSelect,
}: TagSelectorProps) {
	const { projects } = useContext(DataContext);

	const tags = projects
		.map((project: IProject) => project.tagList)
		.flat()
		//remove repetidos
		.filter(
			(value: IProject, index: number, array: IProject[]) =>
				array.indexOf(value) === index,
		);

	return (
		<div className={styles.tagSelector}>
			<button className={styles.tag} onClick={() => onSelect('')}>
				todos
			</button>

			{tags.map((tag: string, i: number) => (
				<button
					key={i}
					className={classNames(
						styles.tag,
						tag === selectedTag && styles.selecionada,
					)}
					onClick={() => onSelect(tag)}
				>
					{tag}
				</button>
			))}
		</div>
	);
}
