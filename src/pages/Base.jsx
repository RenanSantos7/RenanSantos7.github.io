import { Outlet, ScrollRestoration } from "react-router-dom";
import Rodape from "../components/Rodape/Rodape";
import RolarParaCima from "../components/RolaParaCima/RolarParaCima";

export default function Base() {

    return (
        <>
            <Outlet />
            <Rodape />
            <RolarParaCima />
            <ScrollRestoration />
        </>
    )
}
