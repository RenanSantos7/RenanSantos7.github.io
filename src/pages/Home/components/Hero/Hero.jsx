import { useState } from 'react'
import styles from './Hero.module.css'
import fotoPerfil from '../../../../assets/foto-perfil.png'
import Tecnologia from '../../../../components/Tecnologia/Tecnologia'

export default function Hero() {
    const tecnologias = [
        { id: 0, name: 'HTML5', img: '/assets/tecnologias/html.svg' },
        { id: 1, name: 'CSS3', img: '/assets/tecnologias/css.svg' },
        { id: 2, name: 'JavaScript', img: '/assets/tecnologias/javascript.svg' },
        { id: 3, name: 'SASS', img: '/assets/tecnologias/sass.svg' },
        { id: 4, name: 'React', img: '/assets/tecnologias/react.svg' },
        { id: 5, name: 'TypeScript', img: '/assets/tecnologias/typescript.svg' },
    ]

    const [saudacao, setSaudacao] = useState('Olá')
    const [idade, setIdade] = useState(33)


    return (
        <section id='hero' className={`larguraLimitada ${styles.hero}`}>
            <div className={styles.dados}>
                <h1>Renan Santos</h1>
                <p>{saudacao}, meu nome é Renan, tenho {idade} anos e sou um desenvolvedor Front-End em formação.</p>

                <div className={styles.tecnologias}>
                    {tecnologias.map(tecnologia => (
                        <Tecnologia key={tecnologia.id} objeto={tecnologia} />
                    ))}
                </div>

            </div>
            <figure className={styles.minhaFoto}>
                <img alt="Foto de perfil" src={fotoPerfil} />
            </figure>
        </section>
    )
}
