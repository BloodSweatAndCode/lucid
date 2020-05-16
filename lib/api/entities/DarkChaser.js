const Entity = require('../Entity');

class DarkChaser extends Entity {
	/**
	 * Creates an instance of {@link DarkChaser}, which is implemented by the underlying C# class `BadelineOldsite` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DarkChaser} to be created
	 */
	constructor(data = {}) {
		return new Entity('darkChaser', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DarkChaser;