import { useContext } from 'react'
import CardContainer from '../../../../components/CardContainer/CardContainer'
import { DadosContext } from '../../../../contexts/dadosContext'

export default function Blog() {

    const { posts } = useContext(DadosContext)

    return (
        <section id='blog' className='larguraLimitada'>
            <h2>Meu blog</h2>
            <CardContainer
                array={posts}
                tipo='blog'
                date='publicacao'
            />
        </section>
    )
}
