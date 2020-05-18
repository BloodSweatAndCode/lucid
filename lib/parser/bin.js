const BinaryReader = require('../BinaryReader');
const BinaryWriter = require('../BinaryWriter');
const { isFloat, isNumber } = require('../utils');

const numRanges = [
	{ type: 'UInt8', range: [ 0, 255 ] },
	{ type: 'Int16', range: [ -32768, 32767 ] },
	{ type: 'Int32', range: [ -2147483648, 2147483647 ] }
];

exports.decode = async function decode(src, opts = {}) {
	const validate = opts.validate == null ? true : opts.validate;
	const r = new BinaryReader(src);

	// read package data
	const header = await r.readString();
	if (validate && header !== 'CELESTE MAP') {
		throw new Error(`invalid header "${header}" for map file "${src}"`);
	}
	const pkg = await r.readString();

	// read lookup values and attach to map
	const lookupLength = await r.readUInt16();
	const lookup = [];
	for (let i = 0; i < lookupLength; i++) {
		lookup.push(await r.readString());
	}

	// decode all elements and attach to map
	const data = await decodeElement(r, lookup);
	data._package = pkg;
	r.close();

	return data;
};

exports.encode = async function encode(dataDict, dst) {
	return new Promise((resolve, reject) => {
		const seen = {};
		populateEncodeKeyNames(dataDict, seen);

		const lookup = Object.keys(seen);
		const lookupDict = lookup.reduce((a,c,i) => {
			a[c] = i;
			return a;
		}, {});

		const w = new BinaryWriter(dst);
		w.writeString('CELESTE_MAP');
		w.writeString(dataDict._package);
		w.writeUInt16(lookup.length);

		lookup.forEach(l => w.writeString(l));
		encodeElement(w, dataDict, lookupDict);

		w.end();
		w.stream.on('finish', resolve);
		w.stream.on('error', reject);
	});
};


//////////////////////
// private function //
//////////////////////

function getAttributeNames(element) {
	const attr = {};
	for (let [ key, value ] of Object.entries(element)) {
		if (key.indexOf('_') !== 0 && value != null) {
			attr[key] = value;
		}
	}
	return attr;
}

function encodeRunLength(string) {
	let count = 0;
	const res = [];
	let current = string.charCodeAt(0);
	const chars = string.split('').map(c => c.charCodeAt(0));

	for (let char of chars) {
		if (char !== current || count === 255) {
			res.push(count);
			res.push(current);
			count = 1;
			current = char;
		} else {
			count += 1;
		}
	}

	res.push(count);
	res.push(current);

	return Buffer.from(res);
}

function encodeValue(w, attr, value, lookup) {
	if (isFloat(value)) {
		w.writeUInt8(4);
		w.writeFloat(value);
	} else if (isNumber(value)) {
		for (let index = 0; index < numRanges.length; index++) {
			const { type, range: [ min, max] } = numRanges[index];
			if (value >= min && value <= max) {
				w.writeUInt8(index + 1);
				w[`write${type}`](value);
				break;
			}
		}
	} else if (typeof value === 'boolean') {
		w.writeUInt8(0);
		w.writeUInt8(value ? 1 : 0);
	} else if (typeof value === 'string') {
		const index = lookup[value] || 0;
		if (index === 0) {
			const encodedValue = encodeRunLength(value);
			const encodedLength = encodedValue.length;

			if (encodedLength < value.length && encodedLength <= numRanges[1].range[1]) {
				w.writeUInt8(7);
				w.writeUInt16(encodedLength);
				w.write(encodedValue);
			} else {
				w.writeUInt8(6);
				w.writeString(value);
			}
		} else {
			w.writeUInt8(5);
			w.writeUInt16(index);
		}
	}
}

function encodeElement(w, element, lookup) {
	if (Array.isArray(element)) {
		for (let el of element) {
			encodeElement(w, el, lookup);
		}
	} else {
		const attrs = getAttributeNames(element);
		const children = element.__children || [];

		w.writeUInt16(lookup[element.__name] || 0);
		w.writeUInt8(Object.keys(attrs).length);

		for (let [ key, value ] of Object.entries(attrs)) {
			w.writeUInt16(lookup[key] || 0);
			encodeValue(w, key, value, lookup);
		}

		w.writeUInt16(children.length);
		encodeElement(w, children, lookup);
	}
}

function populateEncodeKeyNames(dict, seen) {
	const name = dict.__name;
	seen[name] = (seen[name] || 0) + 1;
	const children = dict.__children || [];

	for (let [ key, value ] of Object.entries(dict)) {
		if (key.indexOf('__') !== 0) {
			seen[key] = (seen[key] || 0) + 1;
		}

		if (typeof value === 'string' && key !== 'innerText') {
			seen[value] = (seen[value] || 0) + 1;
		}
	}

	for (let child of children) {
		populateEncodeKeyNames(child, seen);
	}
}

async function look(r, lookup) {
	return lookup[await r.readUInt16()];
}

async function readRunLengthEncoded(r) {
	const byteCount = await r.readUInt16();
	const data = [];
	let string = '';

	for (let i = 0; i < byteCount; i++) {
		data.push(await r.readUInt8());
	}

	for (let i = 0; i < data.length; i = i + 2) {
		const times = data[i];
		const char = data[i + 1];
		string += String.fromCharCode(char).repeat(times);
	}

	return string;
}

async function decodeValue(r, type, lookup) {
	if (type === 0) {
		return !!(await r.readUInt8());
	} else if (type === 1) {
		return await r.readUInt8();
	} else if (type === 2) {
		return await r.readUInt16();
	} else if (type === 3) {
		return await r.readInt32();
	} else if (type === 4) {
		return await r.readFloat();
	} else if (type === 5) {
		return await look(r, lookup);
	} else if (type === 6) {
		return await r.readString();
	} else if (type === 7) {
		return await readRunLengthEncoded(r);
	} else {
		throw new Error(`invalid bin type ${type}`);
	}
}

async function decodeElement(r, lookup) {
	const name = await look(r, lookup);
	const attrCount = await r.readUInt8();
	const element = { __name: name };

	for (let i = 0; i < attrCount; i++) {
		const key = await look(r, lookup);
		const type = await r.readUInt8();
		const value = await decodeValue(r, type, lookup);
		element[key] = value;
	}

	const elementCount = await r.readUInt16();
	if (elementCount > 0) {
		element.__children = [];
		for (let i = 0; i < elementCount; i++) {
			element.__children.push(await decodeElement(r, lookup));
		}
	}

	return element;
}