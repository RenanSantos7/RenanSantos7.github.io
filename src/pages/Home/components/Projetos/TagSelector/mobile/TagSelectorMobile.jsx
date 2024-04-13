import styles from './TagSelectorMobile.module.css'
import { useContext } from "react"
import { DadosContext } from "../../../../../../contexts/dadosContext"
import { useState } from 'react';

export default function TagSelectorMobile({ tagSelecionada, selecionar }) {

    const { projetos } = useContext(DadosContext)

    const tags = projetos
        .map(projeto => projeto.tags)
        .flat()
        .filter((valor, indice, array) => array.indexOf(valor) === indice)

    function aoEscolher(evt) {
        const valor = evt.target.value
        
        selecionar(valor)
    }

    return (
        <select onChange={aoEscolher} className={styles.tagSelector}>
            <option value=''>Todos</option>
            {tags.map((tag, i) => (
                <option key={i} value={tag}>{tag}</option>
            ))}
        </select>
    )
}
