import styles from './SobreMim.module.css'

export default function SobreMim() {
    return (
        <section id='sobremim' className={`${styles.sobreMim} bgSection`}>
            <div className={`larguraLimitada ${styles.container}`}>
                <h2>Sobre mim</h2>
                
                <p>Sou formado em <strong>Direito</strong> pela Universidade Estadual do Piauí e advogo desde 2012, mas recentemente surgiu em mim uma vontade de mudar de carreira.</p>
                
                <p>E acabei escolhendo algo que eu tinha começado a aprender por <i>hobby</i>: o desenvolvimento para web. Assim que me formei comecei a aprender a mexer com HTML para criar um <b><i>Vade Mecum</i></b> ("aquele tomo de leis que estudantes de Direito carregam para lá e para cá"), pois não queria mais comprar um todo ano se eu podia simplesmente armazená-los no meu PC. Foi então que fui gradativamente me aprofundando no assunto e descobrindo a magia do CSS e do Javascript.</p>
                
                <p>Mas só em 2023 eu comecei efetivamente a me dedicar a estudar programação com mais afinco, começando pelo Curso de Lógica de Programação do canal <b>Curso em Vídeo</b> do Professor Gustavo Guanabara.</p>
                
                <p>Atualmente, estudo JavaScript e React na Alura e pretendo ainda aprender TypeScript e o que mais puder me ajudar a me tornar um desenvolvedor web competente e criativo, capaz de criar soluções inovadoras e eficientes.</p>
            </div>
        </section>
    )
}
