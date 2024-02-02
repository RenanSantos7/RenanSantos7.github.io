import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useEffect } from 'react'
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

    function geraIconeTecnologias(arg, i) {
        if (arg === 'html') {
            return <img key={i} className={styles.icoTec} src='/assets/tecnologias/html.svg' alt='' />
        }
        if (arg === 'react') {
            return <img key={i} className={styles.icoTec} src='/assets/tecnologias/react.svg' alt='' />
        }
        if (arg === 'css') {
            return <img key={i} className={styles.icoTec} src='/assets/tecnologias/css.svg' alt='' />
        }
        if (arg === 'javascript') {
            return <img key={i} className={styles.icoTec} src='/assets/tecnologias/javascript.svg' alt='' />
        }
        if (arg === 'sass') {
            return <img key={i} className={styles.icoTec} src='/assets/tecnologias/sass.svg' alt='' />
        }
        if (arg === 'react') {
            return <img key={i} className={styles.icoTec} src='/assets/tecnologias/react.svg' alt='' />
        }
    }

    return (
        <article className={`${styles.card} card-animado`} >
            <Link to={`${tipo}/${objeto.id}`}>
                <figure className={styles.imagem}>
                    <img className={styles.capa} alt="" src={objeto.img} />
                </figure>
                <div className={styles.containerTecnologias}>
                    {tipo === 'projeto' ?
                        <div className={styles.wrapperTecnologias}>
                            {objeto.tecnologias.map((tec, index) => geraIconeTecnologias(tec, index))}
                        </div>
                        : ''
                    }
                </div>
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
