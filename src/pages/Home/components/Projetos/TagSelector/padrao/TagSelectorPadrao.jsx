import styles from './Tag.module.css'
import { useContext } from "react"
import { DadosContext } from "../../../../../../contexts/dadosContext"
import classNames from 'classnames'

export default function TagSelectorPadrao({tagSelecionada, selecionar}) {

    const { projetos } = useContext(DadosContext)

    const tags = projetos
        .map(projeto => projeto.tags)
        .flat()
        //remove repetidos
        .filter((valor, indice, array) => array.indexOf(valor) === indice)

    return (
        <div className={styles.tagSelector}>
            <button
                className={styles.tag}
                onClick={() => selecionar('')}
            >todos</button>

            {tags.map((tag, i) => (
                <button
                    key={i}
                    className={classNames(
                        styles.tag,
                        tag === tagSelecionada && styles.selecionada
                    )}
                    onClick={() => selecionar(tag)}
                >{tag}</button>
            ))}
        </div>
    )
}
