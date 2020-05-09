class Filler {
	constructor(x, y, w, h) {
		this.__name = 'rect';
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	toDict() {
		const { __name, x, y, w, h } = this;
		return { __name, x, y, w, h };
	}
}

module.exports = Filler;