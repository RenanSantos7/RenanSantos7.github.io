import styles from './Contato.module.css'
import Cabecalho from '../../components/Cabecalho/Cabecalho'

export default function Contato() {
    return (
        <>
            <Cabecalho />
            <main className={`larguraLimitada ${styles.contato}`}>
                <h2 className={styles.titulo}>Me envie uma mensagem</h2>

                <form action="https://formsubmit.co/renansantos7@proton.me" method="POST">

                    <label>
                        <span className={styles.label}>Nome</span>
                        <input
                            type="text"
                            name="nome"
                            className={styles.input}
                            placeholder="Digite aqui seu nome"
                        />
                    </label>


                    <label>
                        <span className={styles.label}>Email</span>
                        <input
                            type="email"
                            nome="nome"
                            className={styles.input}
                            placeholder="Digite aqui seu email"
                        />
                    </label>

                    <label>
                        <span className={styles.label}>Mensagem</span>
                        <textarea
                            className={styles.textarea}
                            name="mensagem"
                            placeholder="Deixe aqui sua mensagem"
                        ></textarea>
                    </label>


                    <div className={styles.buttonContainer}>
                        <button className={styles.btSubmit} type="submit">Enviar</button>
                    </div>

                </form>

            </main>
        </>
    )
}
