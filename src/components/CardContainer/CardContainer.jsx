import Card from '../Card/Card'
import styles from './CardContainer.module.css'

export default function CardContainer({ array, tipo, date }) {
    function organizar(arr, prop) {
        const arrayOrganizado = array.sort((a, b) => {
            const dateA = new Date(`${a[prop]}`)
            const dateB = new Date(`${b[prop]}`)
            return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        const arrayFinal = arrayOrganizado.slice(0, 12)
        return arrayFinal
    }

    const listaCards = organizar(array, date)

    return (
        <div className={styles.cardContainer}>
            {listaCards.map((elemento, index) => (
                <Card
                    key={index}
                    tipo={tipo}
                    objeto={elemento}
                />
            ))}
        </div>
    )
}
