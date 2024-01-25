import { useContext } from 'react'
import CardContainer from '../../../../components/CardContainer/CardContainer'
import { DadosContext } from '../../../../contexts/dadosContext'

export default function Projetos() {
    
    const { projetos } = useContext(DadosContext)

    return (
        <section id='projetos' className="larguraLimitada">
            <h2>Meus Projetos</h2>
            <CardContainer
                array={projetos}
                tipo='projeto'
                date='atualizacao'
            />
        </section>
    )
}
