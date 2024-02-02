import { Outlet, useLocation } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";
import { DadosProvider } from "../../contexts/dadosContext";
import { useEffect } from "react";

export default function Base() {

    // const location = useLocation();

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [location])

    return (
        <>
            <DadosProvider>
                <Outlet />
                <Rodape />
            </DadosProvider>
        </>
    )
}
