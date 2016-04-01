const path = require('path');

const apply = function(options, compiler) {
	if (options == null) {
		options = {};
	}
	var test = options.test;
	if (test == null) {
		return;
	}
	var callback = options.callback || function (filepath, source) { return source; };
	var dirname = options.dirname || path.resolve(__dirname);
	compiler.plugin('emit', function(compilation, done) {
		for (var basename in compilation.assets) {
			var filepath = path.resolve(dirname, basename);
			if (test.test(filepath)) {
				var asset = compilation.assets[basename];
				var origFn = asset.source();
				asset.source = () => callback(filepath, origFn);
				asset.size = () => asset.source().length;
			}
		}
		done();
	});
};

module.exports = function(options) {
	return {
		apply: apply.bind(this, options)
	};
};
