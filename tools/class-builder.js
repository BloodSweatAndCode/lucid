const fs = require('fs').promises;
const path = require('path');

(async function() {
	const data = await fs.readFile(path.join(__dirname, 'Level.cs'), 'utf8');
	const lines = data.split('\n').map(l => l.trim());
	let type = 'Entity';
	let current;

	for (let line of lines) {
		if (current) {
			const match = line.match(/new\s+([^(]+)/);
			if (match !== null) {
				current.class = match[1].trim();
				console.log(JSON.stringify(current));
				current = null;
			}
			continue;
		}

		if (line.indexOf('switch (trigger.Name)') !== -1) {
			type = 'Trigger';
		}

		const match = line.match(/case\s+"([^"]+)"/);
		if (match !== null) {
			current = {
				name: match[1],
				type
			}
		}
	}
})();

const template = `
class <%= entity %> {
	constructor(data = {}) {
		Object.assign(this, data);
	}
}

module.exports = <%= entity %>

`;