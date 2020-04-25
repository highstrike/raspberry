let rpio = require('rpio');

let pin = 31; /* BCM 6 */

rpio.open(pin, rpio.INPUT);

let int = setInterval(function() {
	console.log('state - ' + rpio.read(pin));
}, 1);

setTimeout(function() {
	console.log('resetting...');
	clearInterval(int);
	rpio.close(pin);
	return;
}, 1000);
