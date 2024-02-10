import { useEffect, useMemo, useRef } from 'react'
import Card from '../Card/Card'
import BotaoDirecional from './BotaoDirecional/BotaoDirecional'
import styles from './Carrossel.module.css'

export default function Carrossel({ array, propData }) {
    const carrossel = useRef(null)
    const toqueInicioX = useRef(null);
    const distanciaRolagem = 420

    function organizar(arr, prop) {
        const arrayOrganizado = array.sort((a, b) => {
            const dateA = new Date(`${a[prop]}`)
            const dateB = new Date(`${b[prop]}`)
            return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        const arrayFinal = arrayOrganizado.slice(0, 12)
        return arrayFinal
    }

    const listaCards = useMemo(() => {
        return organizar(array, propData)
    }, [array, propData])

    function rolarCarrossel(distancia) {
        carrossel.current.scrollLeft += distancia
    }

    function rolarCarrosselBotao(evt, distancia) {
        evt.preventDefault()
        rolarCarrossel(distancia)
    }

    useEffect(() => {
        function aoTocar(evt) {
            toqueInicioX.current = evt.touches[0].clientX
        }

        function aoMoverToque(evt) {
            if (toqueInicioX.current === null) return

            const toqueFimX = evt.touches[0].clientX
            const deltaX = toqueInicioX.current - toqueFimX

            const fatorVelocidade = 10;
            rolarCarrossel(deltaX * fatorVelocidade);
            toqueInicioX.current = toqueFimX
        }

        carrossel.current.addEventListener('touchstart', aoTocar)
        carrossel.current.addEventListener('touchmove', aoMoverToque)

        return () => {
            carrossel.current.removeEventListener('touchstart', aoTocar)
            carrossel.current.removeEventListener('touchmove', aoMoverToque)
        }
    }, [])

    return (
        <div className={styles.carrossel}>
            <BotaoDirecional direcao='voltar' aoClicar={evt => rolarCarrosselBotao(evt, -distanciaRolagem)} />

            <div className={styles.carrosselContainer} ref={carrossel}>
                <div className={styles.carrosselWrapper}>
                    {listaCards === 0
                        ? <p className={styles.carregando}>Carregando<span className={styles.reticencias}>...</span></p>
                        : (listaCards.map((projeto, index) => (
                            <Card
                                key={index}
                                tipo='projeto'
                                objeto={projeto}
                            />
                        )))
                    }
                </div>
            </div>

            <BotaoDirecional direcao='avancar' aoClicar={evt => rolarCarrosselBotao(evt, distanciaRolagem)} />
        </div>
    )
}
