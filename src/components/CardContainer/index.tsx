import { IPost, IProject } from '../../types';
import Card from '../Card';
import styles from './styles.module.css';

type CardContainerProps =
	| {
			type: 'blog';
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
		const sortedArray = array.sort((a: any, b: any) => {
			const dateA = new Date(a[prop]);
			const dateB = new Date(b[prop]);
			return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
		});
		const finalArray = sortedArray.slice(0, 12);
		console.log(sortedArray);
		return finalArray;
	}

	const cardLists = sortArray(dateProp);

	// const cardLists = array.toReversed().slice(0, 12);

	return (
		<div className={styles.cardContainer}>
			{cardLists.map(item =>
				type === 'blog' ? (
					<Card key={item.id} type='blog' obj={item as IPost} />
				) : (
					<Card key={item.id} type='projeto' obj={item as IProject} />
				),
			)}
		</div>
	);
}
