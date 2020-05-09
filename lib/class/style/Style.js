class Style {
	constructor(fg = [], bg = []) {
		this.foregrounds = fg;
		this.backgrounds = bg;
	}

	toDict() {
		return [
			{
				__name: 'Foregrounds',
				__children: this.foregrounds.map(f => f.toDict())
			},
			{
				__name: 'Backgrounds',
				__children: this.backgrounds.map(b => b.toDict())
			}
		];
	}
}

module.exports = Style;