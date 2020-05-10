const blacklistedEntityAttrs = [ 'nodes' ];
let globalEntityId = 0;

class Entity {
	constructor(name, data, id) {
		this.name = name;
		this.data = data;
		this.id = id == null ? globalEntityId : id;

		if (id >= globalEntityId) {
			globalEntityId = id + 1;
		}
	}

	toDict() {
		const { data } = this;
		const res = {};
		res.__name = this.name;
		res.id = this.id;

		for (let [ key, value ] of Object.entries(data)) {
			if (!blacklistedEntityAttrs.includes(key)) {
				res[key] = value;
			}
		}

		if (data.nodes && data.nodes.length) {
			res.__children = [];

			for (let node of data.nodes) {
				res.__children.push({
					__name: 'node',
					x: node[0],
					y: node[1]
				});
			}
		}

		return res;
	}
}

module.exports = Entity;