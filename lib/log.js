const config = require('../config');
const debug = require('debug');
const fs = require('fs').promises;

function getDate() {
	const today = new Date();
	let dd = today.getDate();
	let MM = today.getMonth() + 1;
	let yyyy = today.getFullYear();
	let hh = today.getHours();
	let mm = today.getMinutes();
	let ss = today.getSeconds();
	let mmm = today.getMilliseconds();

	if (dd < 10) { dd = '0' + dd; }
	if (MM < 10) { MM = '0' + MM; }
	if (hh < 10) { hh = '0' + hh; }
	if (mm < 10) { mm = '0' + mm; }
	if (ss < 10) { ss = '0' + ss; }
	if (mmm < 10) { mmm = '00' + mmm; }
	else if (mmm < 100) { mmm = '0' + mmm; }
	return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}.${mmm}`;
}

const origFormatArgs = debug.formatArgs;
debug.formatArgs = function (args) { // requires access to "this"
    // example: prepend something to arguments[0]
    args[0] = `[${getDate()}] ${args[0]}`;

    // call original implementation
    origFormatArgs.call(this, args);
};

module.exports = function(namespace) {
	return async function(msg) {
		debug(namespace)(msg);
		await fs.appendFile(config.logFile, msg + '\n');
	};
};