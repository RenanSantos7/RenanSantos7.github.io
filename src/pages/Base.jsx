import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect } from "react";
//import { DadosProvider } from "../contexts/dadosContext";
import Rodape from "../components/Rodape/Rodape";
import RolarParaCima from "../components/RolaParaCima/RolarParaCima";

export default function Base() {

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(pathname)
    }, [pathname])

    return (
        <>
            <Outlet />
            <Rodape />
            <RolarParaCima />
        </>
    )
}
