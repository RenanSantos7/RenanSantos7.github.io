import { useContext, useState } from 'react'

import { DadosContext } from '../../../../contexts/dadosContext'
import CardContainer from '../../../../components/CardContainer/CardContainer'
import TagSelector from './TagSelector/TagSelector'
import styles from './styles.module.css'

export default function Projetos() {
    
    const { projetos } = useContext(DadosContext)
    const [tagSelecionada, setTagSelecionada] = useState('')

    const projetosFiltrados = projetos.filter(projeto => {
        if (tagSelecionada === '') {
            return true
        }
        
        return projeto.tags.includes(tagSelecionada)
    })
    
    return (
        <section id='projetos' className="larguraLimitada">
            <div className={styles.header}>
                <h2>Meus Projetos</h2>
                <TagSelector
                    tagSelecionada={tagSelecionada}
                    selecionar={setTagSelecionada}
                />
            </div>

            <CardContainer
                array={projetosFiltrados}
                tipo='projeto'
                date='atualizacao'
            />
        </section>
    )
}
