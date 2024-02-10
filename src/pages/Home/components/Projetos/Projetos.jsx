import { useContext } from 'react'
import CardContainer from '../../../../components/CardContainer/CardContainer'
import { DadosContext } from '../../../../contexts/dadosContext'
import Carrossel from '../../../../components/Carrossel/Carrossel'

export default function Projetos() {
    
    const { projetos } = useContext(DadosContext)

    return (
        <section id='projetos' className="larguraLimitada">
            <h2>Meus Projetos</h2>
            {/* <CardContainer
                array={projetos}
                tipo='projeto'
                date='atualizacao'
            /> */}
            <Carrossel
                array={projetos}
                propData='atualizacao'
            />
        </section>
    )
}
