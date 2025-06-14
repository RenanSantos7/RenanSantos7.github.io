import { useContext } from 'react'
import CardContainer from '../../../../components/CardContainer'
import { DataContext } from '../../../../contexts/dataContext'

export default function Blog() {

    const { posts } = useContext(DataContext)

    return (
        <section id='blog' className='larguraLimitada'>
            <h2>Meu blog</h2>
            <CardContainer
                array={posts}
                type='post'
                dateProp='publication'
            />
        </section>
    )
}
