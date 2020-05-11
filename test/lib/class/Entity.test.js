const { Entity } = require('../../../lib/class');

describe('Entity', () => {

	const fakeId = 999;

	describe('#constructor', () => {

		it('inits entity', () => {
			const name = 'foo';
			const data = { bar: 123 };
			const id = fakeId;
			const entity = new Entity(name, data, id);
			entity.should.have.properties({ name, data, id });
		});

		it('inits entity with global id', () => {
			const name = 'foo';
			const data = { bar: 123 };
			const entity = new Entity(name, data);
			entity.should.have.properties({ name, data, id: fakeId + 1 });
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			const name = 'foo';
			const data = {
				bar: 123,
				nodes: [ [ 1, 2], [ 400, 500] ]
			};
			const id = fakeId;
			const entity = new Entity(name, data, id);
			entity.toDict().should.eql({
				__name: name,
				id,
				bar: 123,
				__children: [
					{ __name: 'node', x: 1, y: 2 },
					{ __name: 'node', x: 400, y: 500 }
				]
			});
		});

	});

});