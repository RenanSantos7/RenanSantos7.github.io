import { IPost, IProject } from '../../types';
import Card from '../Card';
import styles from './styles.module.css';

type CardContainerProps =
	| {
			type: 'post';
			array: IPost[];
			dateProp: keyof IPost;
	  }
	| {
			type: 'projeto';
			array: IProject[];
			dateProp: keyof IProject;
	  };

export default function CardContainer({
	array,
	type,
	dateProp,
}: CardContainerProps) {
	function sortArray(prop: string) {
		const arrayOrganizado = array.sort((a: any, b: any) => {
			const dateA = new Date(a[prop]);
			const dateB = new Date(b[prop]);
			return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
		});
		const arrayFinal = arrayOrganizado.slice(0, 12);
		return arrayFinal;
	}

	const listaCards = sortArray(dateProp);

	return (
		<div className={styles.cardContainer}>
			{listaCards.map(item =>
				type === 'post' ? (
					<Card key={item.id} type='post' obj={item as IPost} />
				) : (
					<Card key={item.id} type='projeto' obj={item as IProject} />
				),
			)}
		</div>
	);
}
