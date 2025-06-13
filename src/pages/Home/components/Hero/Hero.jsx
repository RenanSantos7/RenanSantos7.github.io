import styles from './Hero.module.css'
import { useState } from 'react'
import Tecnologia from '../../../../components/Tecnologia/Tecnologia'
import { useEffect } from 'react'
import calculaMinhaIdade from '../../../../utils/calculaIdade'
import defineSaudacao from '../../../../utils/saudacao'

const tecnologias = [
  { id: 0, name: 'HTML5', img: '/assets/tecnologias/html.svg' },
  { id: 1, name: 'CSS3', img: '/assets/tecnologias/css.svg' },
  //   { id: 2, name: 'JavaScript', img: '/assets/tecnologias/javascript.svg' },
  { id: 5, name: 'TypeScript', img: '/assets/tecnologias/typescript.svg' },
  { id: 4, name: 'React', img: '/assets/tecnologias/react.svg' },
  {
    id: 5,
    name: 'Expo',
    img: 'https://camo.githubusercontent.com/4a3e29d248be84fccc77b9c3307ab91c679a6557da14452f589c694e6db78759/68747470733a2f2f69636f6e732e6578706f2e6170702f6578706f2e737667',
  },
  {
    id: 6,
    name: 'React Navigation',
    img: 'https://camo.githubusercontent.com/f09401b271389975589f0dea455a1885c5867c8c5520107df74e7ad24ee0ebae/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f72656163746e617669676174696f6e2f72656163746e617669676174696f6e2d6f726967696e616c2e737667',
  },
  {
    id: 6,
    name: 'Figma',
    img: 'https://camo.githubusercontent.com/b27c50dd9ce782ba9df160d65a7923628d9d50c8137798c77f85202d93737cb6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6669676d612f6669676d612d6f726967696e616c2e737667',
  },
  {
    id: 7,
    name: 'Firebase',
    img: '/assets/tecnologias/firebase.svg',
  },
]

export default function Hero() {
  const [saudacao, setSaudacao] = useState('Olá')
  const [idade, setIdade] = useState(33)

  useEffect(() => {
    const minhaIdade = calculaMinhaIdade()
    const cumprimento = defineSaudacao()
    setIdade(minhaIdade)
    setSaudacao(cumprimento)
  }, [])

  return (
    <section id="hero" className={`larguraLimitada ${styles.hero}`}>
      <div className={styles.dados}>
        <h1>Renan Santos</h1>
        <p>
          {saudacao}, meu nome é Renan, tenho {idade} anos e sou um
          desenvolvedor Front-End.
        </p>

        <a
          href="https://drive.google.com/file/d/13S2fplOw7y0D4N16w2AubSPxJwRhb4Xn/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferer"
          className={styles.curriculo}
        >
          Meu currículo
        </a>
      </div>

      <div className={styles.tecnologias}>
        {tecnologias.map((tecnologia) => (
          <Tecnologia key={tecnologia.id} objeto={tecnologia} />
        ))}
      </div>
    </section>
  )
}
