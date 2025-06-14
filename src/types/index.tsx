interface IContent {
	id: number | string;
	title: string;
	description: string;
	content: string;
	tagList: string[];
	img: string;
}

export interface IPost extends IContent {
	publication: string | Date;
}

export interface IProject extends IContent {
	repoLink: string;
	deployLink?: string;
	alt?: string;
	technologies: string[];
	updated: string | Date;
}
