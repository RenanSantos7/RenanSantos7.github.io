import { useContext, ChangeEvent } from 'react';

import { DataContext } from '../../../../../contexts/dataContext';
import { TagSelectorProps } from '..';
import { IProject } from '../../../../../types';
import styles from './styles.module.css';

export default function TagSelectorMobile({
	selectedTag,
	onSelect,
}: TagSelectorProps) {
	const { projects } = useContext(DataContext);

	const tagList = projects
		.map((project: IProject) => project.tagList)
		.flat()
		.filter(
			(value: IProject, indice: number, array: any) =>
				array.indexOf(value) === indice,
		);

	function aoEscolher(evt: ChangeEvent<HTMLSelectElement>) {
		const valor = evt.target.value;

		onSelect(valor);
	}

	return (
		<select onChange={aoEscolher} className={styles.tagSelector}>
			<option value=''>Todos</option>
			{tagList.map((tag: string, i: number) => (
				<option key={i} value={tag}>
					{tag}
				</option>
			))}
		</select>
	);
}
