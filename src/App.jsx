import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { router } from "./router";
import { DadosProvider } from "./contexts/dadosContext";

export default function App() {
    return (
        <DadosProvider>
            <RouterProvider router={router} />
        </DadosProvider>
    )
}