import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, ScrollRestoration } from 'react-router-dom';

import { router } from './router';
import { DataProvider } from './contexts/dataContext';

export default function App() {
	return (
		<DataProvider>
			<HelmetProvider>
				<RouterProvider router={router} />
			</HelmetProvider>
		</DataProvider>
	);
}
