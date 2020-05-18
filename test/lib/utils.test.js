const fs = require('fs');
const utils = require('../../lib/utils');

describe('utils', () => {

	describe('#attributes', () => {

		it('returns {} if element is not defined', () => {
			utils.attributes().should.eql({});
		});

		it('return attributes', () => {
			const element = {
				__name: 'foo',
				bar: 'quux',
				bsac: 123,
				__other: 'dont matter'
			};
			utils.attributes(element).should.eql({
				bar: 'quux',
				bsac: 123
			});
		});

	});

	describe('#children', () => {

		it('returns [] if element is not defined', () => {
			utils.children().should.eql([]);
		});

		it('returns [] if element has no __children property', () => {
			utils.children({ basc: 'got no kids' }).should.eql([]);
		});

		it('returns children', () => {
			const element = { __name: 'foo', __children: [ 1, 2, 3 ] };
			utils.children(element).should.eql([ 1, 2, 3 ]);
		});

	});

	describe('#loadDataAsDict', () => {

		it('sets target based on data', () => {
			const target = {};
			const data = {
				__name: 'bsac',
				__other: 123,
				foo: { bar: 'quux' },
				another: { key: 123 }
			};
			utils.loadDataAsDict(target, data);
			target.should.eql({
				bsac: {
					foo: { bar: 'quux' },
					another: { key: 123 }
				}
			});
		});

		it('sets target based on data with children', () => {
			const target = {};
			const data = {
				__name: 'bsac',
				__other: 123,
				foo: { bar: 'quux' },
				another: { key: 123 },
				__children: [
					{
						__name: '2snek',
						beard: false
					},
					{
						__name: 'freeland1787',
						salt: true
					}
				]
			};
			utils.loadDataAsDict(target, data);
			target.should.eql({
				bsac: {
					foo: { bar: 'quux' },
					another: { key: 123 },
					'2snek': { beard: false },
					freeland1787: { salt: true }
				}
			});
		});

	});

	describe('#dictAsEncodedData', () => {

		it('return on empty data', () => {
			const name = 'bsac';
			const data = {};
			utils.dictAsEncodedData(name, data).should.eql({
				__name: 'bsac'
			});
		});

		it('return with data', () => {
			const name = 'bsac';
			const data = {
				foo: 'bar',
				taco: { trucks: 'rule' }
			};
			utils.dictAsEncodedData(name, data).should.eql({
				__name: 'bsac',
				foo: 'bar',
				__children: [
					{
						__name: 'taco',
						trucks: 'rule'
					}
				]
			});
		});

	});

	describe('#findChildWithName', () => {

		it('returns default value if no child found', () => {
			const element = {};
			const name = 'foobar';
			utils.findChildWithName(element, name).should.eql({});
		});

		it('returns child', () => {
			const element = {
				__children: [
					{ __name: 'quux' },
					{ __name: 'foobar', key: 'value' },
					{ __name: 'bsac' }
				]
			};
			const name = 'foobar';
			utils.findChildWithName(element, name).should.eql({
				__name: 'foobar',
				key: 'value'
			});
		});

	});

	describe('#findCelesteDir', () => {

		const fsAccess = fs.access;
		afterEach(() => {
			fs.access = fsAccess;
		});

		it('finds the Celeste installation directory', async () => {
			// fake the access check on travis ci
			if (process.env.TRAVIS) {
				fs.access = function(file, opts, callback) {
					return callback();
				};
			}

			return (await utils.findCelesteDir()).should.match(/Celeste/);
		});

		it('rejects if no Celeste installation is found', async () => {
			// fake the access check when NOT on travis ci
			if (!process.env.TRAVIS) {
				fs.access = function(file, opts, callback) {
					return callback(new Error('foobar'));
				};
			}

			// fake the access check on travis ci
			return utils.findCelesteDir().should.be.rejectedWith(/Unable to find/);
		});

	});

	describe('#safeName', () => {

		it('makes strings safe for filenames and class names', () => {
			utils.safeName('foo-bar-quux').should.equal('fooBarQuux');
			utils.safeName('Cliffside_flag').should.equal('cliffsideFlag');
			utils.safeName('...bob.makes.__BURGERS').should.equal('bobMakesBurgers');
			utils.safeName('JUNE   and &^%charli#$e').should.equal('juneAndcharlie');
			utils.safeName('just One Last Test #5').should.equal('justOneLastTest5');
		});

	});

	describe('#capFirst', () => {

		it('capitalizes first chararcter of string', () => {
			utils.capFirst('foo-bar-quux').should.equal('Foo-bar-quux');
			utils.capFirst('Cliffside_flag').should.equal('Cliffside_flag');
			utils.capFirst('foobar').should.equal('Foobar');
			utils.capFirst('juneAndCharlie').should.equal('JuneAndCharlie');
		});

	});

});


