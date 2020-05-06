exports.attributes = function(element) {
	if (!element) { return {}; }
	return Object.keys(element)
		.filter(a => a.indexOf('__') !== 0)
		.reduce((a,c) => {
			a[c] = element[c];
			return a;
		}, {});
};

exports.children = function(element) {
	if (!element) { return []; }
	return element.__children || [];
};

exports.findChildWithName = function(element, name, def = {}) {
	for (let child of (element.__children || [])) {
		if (child.__name === name) {
			return child;
		}
	}
	return def;
};
