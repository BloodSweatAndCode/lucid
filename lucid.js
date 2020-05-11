const config = require('./config/lucid.json');
const os = require('os');
const classes = require('./lib/class');

class Lucid {
	constructor() {
		// attach classes
		Object.assign(this, classes);

		// initialize config
		this.config = config;
		this.config.defaultModDir = {
			darwin: os.homedir() + '/Library/Application\\ Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS/Mods',
			win32: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste\\Mods'
		};
	}
}

module.exports = new Lucid();

// (async function() {
// 	try {
// 		const side = new Side();
// 		await side.load(config.testMapFile);
// 		side.map.rooms[0].entities.push(new Entity('spinner', {
// 			x: 152,
// 			color: 'Blue',
// 			attachToSolid: false,
// 			y: 120
// 		}));

// 		console.log(side.sideName);

// 		await fs.writeFile('output/test.json', JSON.stringify(side, null, 2));

// 		await side.encode(config.testMapDstFile);

// 		// mac sucks and won't allow you to write a stream to a package (.app dir),
// 		// so we just copy the file from the output to the Mods dir
// 		if (os.platform() === 'darwin') {
// 			exec(`cp ${config.testMapDstFile} ${os.homedir() + '/Library/Application\\ Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS/Mods'}`);
// 		}

// 		console.log('done');

// 		// await fs.writeFile('output/test.json', JSON.stringify(side, null, 2));
// 	} catch (err) {
// 		console.error(err.stack);
// 		process.exit(1);
// 	}
// })();