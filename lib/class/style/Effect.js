class Effect {
	constructor(name, data = {}) {
		this.__name = name;
		this.name = name;
		this.data = data;
	}

	toDict() {
		const res = Object.assign({}, this.data);
		res.__name = this.name;
		return res;
	}
}

module.exports = Effect;
