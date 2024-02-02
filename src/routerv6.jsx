import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base/Base";
import Home from "./pages/Home/Home";
import Projeto from "./pages/Projeto/Projeto";
import Blog from "./pages/Blog/Blog";
import Contato from './pages/Contato/Contato';
import Erro404 from './pages/Erro404/Erro404';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Base />,
        children: [
            {
                index: 'true',
                element: <Home />
            },
            {
                path: 'projeto/:id',
                element: <Projeto />
            },
            {
                path: 'blog/:id',
                element: <Blog />
            },
            {
                path: 'contato',
                element: <Contato />
            },
            {
                path: '*',
                element: <Erro404 />
            }
        ]
    }
])

