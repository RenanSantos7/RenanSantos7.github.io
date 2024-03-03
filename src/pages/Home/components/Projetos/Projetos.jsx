import { useContext } from 'react'
import { DadosContext } from '../../../../contexts/dadosContext'
import ContainerExpansivel from '../../../../components/ContainerExpansivel/ContainerExpansivel'
import { organizar } from '../../../../utils/organizarArray'
import Card from '../../../../components/Card/Card'

export default function Projetos() {
    const { projetos } = useContext(DadosContext)

    const projetosOrganizados = organizar(projetos, 'atualizacao')

    return (
        <section id='projetos' className="larguraLimitada">
            <h2>Meus Projetos</h2>
            <ContainerExpansivel>
                {projetosOrganizados.map((projeto, index) => (
                    <Card
                        key={index}
                        tipo='projeto'
                        objeto={projeto}
                    />
                ))}
            </ContainerExpansivel>
        </section>
    )
}

