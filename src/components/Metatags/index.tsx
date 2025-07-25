interface MetatagsProps {
	title?: string;
	description?: string;
	author?: string;
	image?: string;
	type?: string;
	keywords?: string[];
	published?: Date;
}

export default function Metatags({
	title,
	description,
	author,
	image,
	type,
	keywords,
	published
}: MetatagsProps) {
	return (
		<>
			{title ? <title>{title}</title> : null}

			{description ? (
				<>
					<meta name='description' content={description} />
					<meta property='og:description' content={description} />
				</>
			) : null}

			{keywords ? (
				<meta name='keywords' content={keywords.join(', ')} />
			) : null}

			{author ? (
				<meta name='author' content={author} />
			) : null}

			{author && type === 'article' ? (
				<meta property='article:author' content={author} />
			) : null}

			{image ? (
				<meta property='og:image' content={image} />
			) : null}

			{type ? (
				<meta property='og:type' content={type} />
			) : null}

			{published && type === 'article' ? (
                <meta property='article:published_time' content={published.toISOString()} />
            ) : null}
		</>
	);
}
