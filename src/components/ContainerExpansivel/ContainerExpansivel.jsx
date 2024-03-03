import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ContainerExpansivel.module.css'
import { useState } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function ContainerExpansivel({ children }) {
    
    const [aberto, setAberto] = useState(false)

    const rotacao = aberto ? '0 0 180deg' : '0'

    return (
        <div className={`
            ${styles.container}
            ${aberto? 'aberto' : ''}
        `}>
            <div>
                {children}
            </div>

            <div>
                <button onClick={() => setAberto(!aberto)}>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{
                            rotate3d: { rotacao },
                            transition: 'all ease-in-out 0.6s'
                        }}
                    />
                </button>
            </div>
        </div>
    )
}
