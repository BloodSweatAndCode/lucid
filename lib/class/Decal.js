class Decal {
	constructor(texture, x, y, scaleX, scaleY) {
		this.__name = 'decal';
		this.texture = texture;
		this.x = x;
		this.y = y;
		this.scaleX = scaleX;
		this.scaleY = scaleY;
	}

	toDict() {
		const { __name, texture, x, y, scaleX, scaleY } = this;
		return { __name, texture, x, y, scaleX, scaleY };
	}
}

module.exports = Decal;
