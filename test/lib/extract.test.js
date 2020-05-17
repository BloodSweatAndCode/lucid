const extract = require('../../lib/extract');

describe.only('extract', () => {

	it('finds local celeste installation directory', async () => {
		await extract();
	}).timeout(60000);

});