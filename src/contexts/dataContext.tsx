import { createContext, ReactNode } from 'react';
import posts from '../data/blogposts.json';
import projects from '../data/projects.json';

export const DataContext = createContext(null);
DataContext.displayName = 'Dados Portifolio';

export function DataProvider({ children }: { children: ReactNode }) {
	return (
		<DataContext.Provider
			value={{
				posts,
				projects,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}
