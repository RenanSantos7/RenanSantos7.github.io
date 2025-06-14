import styles from './Tecnologia.module.css'

export default function Tecnologia({objeto}) {
    return (
        <figure
            aria-label={`tecnologia: ${objeto.name}`}
            className={styles.figure}
        >
            <img
                className={styles.imagem}
                src={objeto.img}
                alt=""
                aria-hidden="true"
            />
            <figcaption className={styles.legenda}>
                {objeto.name}
            </figcaption>
        </figure>
    )
}
