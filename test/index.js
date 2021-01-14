import sassTrue from 'sass-true';

[
	'./test/single-query.scss',
	'./test/single-query-outside-selector.scss',
	'./test/multiple-queries.scss',
	'./test/multiple-queries-outside-selector.scss'
].forEach((fp) => {
	sassTrue.runSass(
		{
			file: fp
		},
		{ describe, it }
	);
});
