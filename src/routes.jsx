import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from "./pages/Base/Base";
import Home from "./pages/Home/Home";
import Projeto from "./pages/Projeto/Projeto";
import Blog from "./pages/Blog/Blog";
import Contato from './pages/Contato/Contato';
import Erro404 from './pages/Erro404/Erro404';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Base />}>
                    <Route index element={<Home />} />
                    <Route path='projeto/:id' element={<Projeto />} />
                    <Route path='blog/:id' element={<Blog />} />
                    <Route path='contato' element={<Contato />} />
                    <Route path='*' element={<Erro404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
