# sass-scoped-media-query

[![Build Status][ci-img]][ci]

Scope CSS styles and apply them only inside provided selector and media query pairs.

"Hacky" workaround for [element queries](https://www.filamentgroup.com/lab/element-query-workarounds.html).

## Install

```sh
npm install sass-scoped-media-query --save
```

## Usage

Input:

```scss
@import 'sass-scoped-media-query/index';

@include scoped-media-query(('screen and (min-width: 500px)', '.jasper')) {

	.gizmo {
		color: #f00;
	}
}

@include scoped-media-query(
	('screen and (min-width: 500px)', '.gigi'),
	('screen and (min-width: 1000px)', '.lola'),
) {

	.gunner {
		font-family: 'Helvetica', sans-serif;
	}
}
```

Output:

```css
@media screen and (min-width: 500px) {
	
	.jasper .gizmo {
		color: #f00;
	}	
}

@media screen and (min-width: 500px) {
	
	.gigi .gunner {
		font-family: 'Helvetica', sans-serif;
	}	
}

@media screen and (min-width: 1000px) {
	
	.lola .gunner {
		font-family: 'Helvetica', sans-serif;
	}	
}
```

## API

### mixin(mediaQuery)

Returns scoped CSS styles based on selector and media query pair.

#### mediaQuery

Type: `sass.types.List`

List of selector and media query pairs.

## Browser support

Works where [media queries](http://caniuse.com/#feat=css-mediaqueries) are supported.

## References

* Originally based on [Filament Group’s project](https://github.com/filamentgroup/scoped-media-query), but completely refactored to be more flexible.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/sass-scoped-media-query
[ci-img]: https://img.shields.io/travis/niksy/sass-scoped-media-query.svg
