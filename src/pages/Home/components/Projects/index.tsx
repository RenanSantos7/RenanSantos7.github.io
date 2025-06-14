import { useContext, useState } from 'react'

import { DataContext } from '../../../../contexts/dataContext'
import { IProject } from '../../../../types'
import CardContainer from '../../../../components/CardContainer'
import TagSelector from '../TagSelector'
import styles from './styles.module.css'

export default function Projects() {
    
    const { projects } = useContext(DataContext)
    const [selectedTag, setTagSelecionada] = useState('')

    const filteredProjects = projects.filter((project: IProject) => {
        if (selectedTag === '') {
            return true
        }
        
        return project.tagList.includes(selectedTag)
    })
    
    return (
        <section id='projetos' className="larguraLimitada">
            <div className={styles.header}>
                <h2>Meus Projetos</h2>
                <TagSelector
                    selectedTag={selectedTag}
                    onSelect={setTagSelecionada}
                />
            </div>

            <CardContainer
                array={filteredProjects}
                type='projeto'
                dateProp='updated'
            />
        </section>
    )
}
