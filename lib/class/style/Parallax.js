class Parallax {
	constructor(data = {}) {
		this.__name = 'parallax';
		this.data = data;
	}

	toDict() {
		const res = Object.assign({}, this.data);
		res.__name = 'parallax';
		return res;
	}
}

module.exports = Parallax;