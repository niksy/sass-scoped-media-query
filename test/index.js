var sassTrue = require('sass-true');

[
	'./test/single-query.scss',
	'./test/single-query-outside-selector.scss',
	'./test/multiple-queries.scss',
	'./test/multiple-queries-outside-selector.scss'
]
	.forEach(function ( fp ) {
		sassTrue.runSass({
			file: fp
		}, describe, it);
	});
