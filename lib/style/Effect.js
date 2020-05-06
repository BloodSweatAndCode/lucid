class Effect {
	constructor(name, data = {}) {
		this.__name = name;
		this.name = name;
		this.data = data;
	}
}

module.exports = Effect;
