const Filler = require('../../../lib/api/Filler');
const Map = require('../../../lib/api/Map');
const Room = require('../../../lib/api/Room');
const Style = require('../../../lib/api/Style');

describe('Map', () => {

	describe('#constructor', () => {

		it('instantiates', () => {
			const map = new Map();
			map.package.should.equal('lucid');
			map.rooms.should.be.an.Array();
			map.style.should.be.instanceOf(Style);
			map.fillers.should.be.an.Array();
		});

		it('instantiates with data', () => {
			const pkg = 'mypackage';
			const rooms = [ new Room() ];
			const fillers = [ new Filler(0, 0, 100, 100) ];
			const map = new Map({ package: pkg, rooms, fillers });
			map.package.should.equal(pkg);
			map.rooms[0].should.be.an.instanceOf(Room);
			map.style.should.be.instanceOf(Style);
			map.fillers[0].should.be.an.instanceOf(Filler);
		});

	});

});