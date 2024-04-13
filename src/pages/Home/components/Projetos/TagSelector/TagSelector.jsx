import { useEffect, useState } from "react"
import TagSelectorMobile from "./mobile/TagSelectorMobile"
import TagSelectorPadrao from "./padrao/TagSelectorPadrao"

export default function TagSelector({tagSelecionada, selecionar}) {
    const [larguraTela, setLarguraTela] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", aoRedimensionar)
        return () => window.removeEventListener("resize", aoRedimensionar)
    }, [])

    function aoRedimensionar() {
        setLarguraTela(window.innerWidth)
    }

    if (larguraTela <= 700) {
        return <TagSelectorMobile tagSelecionada={tagSelecionada} selecionar={selecionar} />
    }

    if (larguraTela > 700) {
        return <TagSelectorPadrao tagSelecionada={tagSelecionada} selecionar={selecionar} />
    }
}
