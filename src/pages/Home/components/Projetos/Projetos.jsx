import { useContext } from 'react'
import CardContainer from '../../../../components/CardContainer/CardContainer'
import { DadosContext } from '../../../../contexts/dadosContext'
import { styled } from 'styled-components'
import TagSelector from './TagSelector/TagSelector'
import { useState } from 'react'

const StyledHeader = styled.header`
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    margin-bottom: 2rem;

    h2 {
        margin-bottom: 0;
    }

    @media (width <= 700px) {
        justify-content: space-between;
        gap: 0;
    }
`

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
            <StyledHeader>
                <h2>Meus Projetos</h2>
                <TagSelector
                    tagSelecionada={tagSelecionada}
                    selecionar={setTagSelecionada}
                />
            </StyledHeader>

            <CardContainer
                array={projetosFiltrados}
                tipo='projeto'
                date='atualizacao'
            />
        </section>
    )
}
