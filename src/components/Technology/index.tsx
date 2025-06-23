import styles from './styles.module.css';

interface TechnologieProps {
	item: {
		id: string | number;
		name: string;
		img: string;
	};
}

export default function Technologie({ item }: TechnologieProps) {
	return (
		<figure
			aria-label={`tecnologia: ${item.name}`}
			className={styles.figure}
		>
			<img
				className={styles.image}
				src={item.img}
				alt=''
				aria-hidden='true'
			/>
			<figcaption className={styles.subtitle}>{item.name}</figcaption>
		</figure>
	);
}
