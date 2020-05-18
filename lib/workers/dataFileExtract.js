// This worker gets fired off into its own process so it can run in parallel
// with other data parsing, basically cutting the processing time in half

const parser = require('../parser');

(async function() {
	const src = process.argv[2];
	const dst = process.argv[3];
	await parser.data.extractToPngFile(src, dst);
})();
