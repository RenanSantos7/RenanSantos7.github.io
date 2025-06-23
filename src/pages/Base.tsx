import { Outlet, ScrollRestoration } from 'react-router-dom';
import Rodape from '../components/PageFooter';
import RollToUp from '../components/RollToUp';

export default function Base() {
	return (
		<>
			<Outlet />
			<Rodape />
			<RollToUp />
			<ScrollRestoration />
		</>
	);
}
