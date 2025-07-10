import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import PageFooter from '../components/PageFooter';
import RollToUp from '../components/RollToUp';
import { useLayoutEffect } from 'react';

export default function Base() {
	const location = useLocation();

	useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);
	
	return (
		<>
			<Outlet />
			<PageFooter />
			<RollToUp />
		</>
	);
}
