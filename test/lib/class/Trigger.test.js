const { Trigger } = require('../../../lib/class');

describe('Trigger', () => {

	describe('#constructor', () => {

		it('inits trigger', () => {
			const name = 'foo';
			const data = { bsac: 'ftw' };
			const id = 123;
			const trigger = new Trigger(name, data, id);
			trigger.should.have.properties({ name, data, id });
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			const name = 'foo';
			const data = {
				bsac: 'ftw'
			};
			const id = 123;
			const trigger = new Trigger(name, data, id);
			trigger.toDict().should.eql({
				__name: name,
				id,
				bsac: 'ftw'
			});
		});

		it('returns dictionary with nodes', () => {
			const name = 'foo';
			const data = {
				bsac: 'ftw',
				nodes: [ [ 1, 2 ], [ 33, 44 ] ]
			};
			const id = 123;
			const trigger = new Trigger(name, data, id);
			trigger.toDict().should.eql({
				__name: name,
				id,
				bsac: 'ftw',
				__children: [
					{
						__name: 'node',
						x: 1,
						y: 2
					},
					{
						__name: 'node',
						x: 33,
						y: 44
					}
				]
			});
		});

	});

});