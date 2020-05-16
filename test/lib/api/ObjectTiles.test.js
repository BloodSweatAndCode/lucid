const { ObjectTiles } = require('../../../lucid-dream');

describe('ObjectTiles', () => {

	describe('#constructor', () => {

		it('inits object tiles with no data', () => {
			for (let data of [ null, '' ]) {
				const ot = new ObjectTiles(data);
				ot.data.should.eql(new Array(23).fill(new Array(40).fill(-1)));
			}
		});

		it('inits object tiles from string', () => {
			const string = '0,7,1,3\n1,6\n';
			const ot = new ObjectTiles(string);
			ot.data.should.eql([
				[ 0, 7, 1, 3 ],
				[ 1, 6, -1, -1 ]
			]);
		});

	});

	describe('#size', () => {

		it('returns size', () => {
			let string = '0,7,1,3\n1,6\n';
			let ot = new ObjectTiles(string);
			ot.size().should.eql([ 32, 16 ]);

			string = '';
			ot = new ObjectTiles([]);
			ot.size().should.eql([ 0, 0 ]);
		});

	});

});