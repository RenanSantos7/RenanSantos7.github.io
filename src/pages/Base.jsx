import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
//import { useEffect } from "react";
//import { DadosProvider } from "../contexts/dadosContext";
import Rodape from "../components/Rodape/Rodape";

export default function Base() {

    // const { pathname } = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname])

    return (
        <>
            <Outlet />
            <Rodape />
            <ScrollRestoration />
        </>
    )
}
