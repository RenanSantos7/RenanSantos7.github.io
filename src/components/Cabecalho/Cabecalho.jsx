import { useEffect, useState } from "react"
import CabecalhoMobile from "./mobile/CabecalhoMobile"
import CabecalhoPadrao from "./padrao/CabecalhoPadrao"

export default function Cabecalho({ animRef, page }) {
    const [larguraTela, setLarguraTela] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", aoRemiensionar)
        return () => window.removeEventListener("resize", aoRemiensionar)
    }, [])

    function aoRemiensionar() {
        setLarguraTela(window.innerWidth)
    }

    if (larguraTela <= 700) {
        return <CabecalhoMobile />
    }

    if (larguraTela > 700) {
        return <CabecalhoPadrao animRef={animRef} page={page} />
    }
}
