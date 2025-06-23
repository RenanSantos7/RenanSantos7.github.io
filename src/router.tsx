import { createBrowserRouter } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Blog from './pages/Blog';
import ContactPage from './pages/Contato';
import Error404 from './pages/Error404';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Base />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'projeto/:id',
				element: <ProjectPage />,
			},
			{
				path: 'blog/:id',
				element: <Blog />,
			},
			{
				path: 'contato',
				element: <ContactPage />,
			},
			{
				path: '*',
				element: <Error404 />,
			},
		],
	},
]);
