import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
// import { useLayoutEffect } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Card({ tipo, objeto }) {

    /*
    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        gsap.from('.card-animado',
            {
                opacity: 0,
                transform: 'scale(0.9)',
                scrollTrigger: {
                    trigger: '.card-animado',
                    markers: true,
                    start: 'top 800px',
                    end: 'bottom 800px',
                    scrub: true
                }
            }
        )

        return () => {
            gsap.killTweensOf('.relogio')
          }
    }, [])
    */

    return (
        <article className={`${styles.card} card-animado`} >
            <Link to={`${tipo}/${objeto.id}`}>
                <figure className={styles.imagem}>
                    <img alt="" src={objeto.img} />
                </figure>
                <div className={styles.texto}>
                    <h3>{objeto.titulo}</h3>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {objeto.descricao}
                    </Markdown>
                </div>
            </Link>
        </article >
    )
}
