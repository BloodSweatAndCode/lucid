class Apply {
	constructor(data, parallax) {
		this.__name = 'apply';
		this.__children = parallax;
		this.data = data;
		this.parallax = parallax;
	}

	toDict() {
		const res = Object.assign(this.data);
		res.__name = 'apply';
		res.__children = this.parallax.toDict();
		return res;
	}
}

module.exports = Apply;
