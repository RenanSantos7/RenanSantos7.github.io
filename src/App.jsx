import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { router } from "./routerv6";
import { DadosProvider } from "./contexts/dadosContext";

export default function App() {
    return (
        <DadosProvider>
            <RouterProvider router={router}>
                <ScrollRestoration />
            </RouterProvider>
        </DadosProvider>
    )
}