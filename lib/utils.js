const camelcase = require('camelcase');

exports.safeName = function(name) {
	return camelcase(name.replace(/[^a-z0-9\s]/gi, ''));
};

exports.capFirst = function(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const attributes = exports.attributes = function(element) {
	if (!element) { return {}; }
	return Object.keys(element)
		.filter(a => a.indexOf('__') !== 0)
		.reduce((a,c) => {
			a[c] = element[c];
			return a;
		}, {});
};

const children = exports.children = function(element) {
	if (!element) { return []; }
	return element.__children || [];
};

const loadDataAsDict = exports.loadDataAsDict = function(target, data) {
	const name = data.__name;
	target[name] = {};

	for (let [ attr, value ] of Object.entries(attributes(data))) {
		target[name][attr] = value;
	}

	for (let child of children(data)) {
		loadDataAsDict(target[name], child);
	}
};

const dictAsEncodedData = exports.dictAsEncodedData = function(name, data) {
	const res = {
		__name: name,
		__children: []
	};

	for (let [ key, value ] of Object.entries(data)) {
		if (!Array.isArray(value) && typeof value === 'object') {
			res.__children.push(dictAsEncodedData(key, value));
		} else {
			res[key] = value;
		}
	}

	if (!res.__children.length) {
		delete res.__children;
	}

	return res;
};

exports.findChildWithName = function(element, name, def = {}) {
	for (let child of (element.__children || [])) {
		if (child.__name === name) {
			return child;
		}
	}
	return def;
};

exports.fill2dArray = function(val, x, y) {
	const array = [];
	for (let i = 0; i < y; i++) {
		array.push((new Array(x)).fill(val));
	}
	return array;
};

exports.copy2dArray = function(src, dst, dim1, dim2) {
	for (let i = 0; i < dim1; i++) {
		for (let j = 0; j < dim2; j++) {
			dst[i][j] = src[i][j];
		}
	}
};

exports.isNumber = function(o) {
	return typeof o === 'number' && isFinite(o);
};

exports.isFloat = function(o) {
	return exports.isNumber(o) && !Number.isInteger(o);
};