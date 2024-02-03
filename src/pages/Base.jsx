import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DadosProvider } from "../contexts/dadosContext";
import Rodape from "../components/Rodape/Rodape";

export default function Base() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <Outlet />
            <Rodape />
        </>
    )
}
