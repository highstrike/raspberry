let rpio = require('rpio');

let pin = 33; /* BCM 13(pwm1) */
let clock = 128; /* 25khz */
let range = 6000; /* IDK */

rpio.open(pin, rpio.PWM);
rpio.pwmSetClockDivider(clock);
rpio.pwmSetRange(pin, range);

console.log('set pin to pwm');
rpio.pwmSetData(pin, 5000);

setTimeout(function() {
	console.log('set pin to input');
	rpio.open(pin, rpio.INPUT);
	return;
}, 10000);
