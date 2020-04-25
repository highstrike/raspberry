const { Gpio } = require('onoff');
const led = new Gpio('27', 'out');

let isLedOn = true;
let times = 5;

led.writeSync(1);
let blink = setInterval(() => {
	if(times-- <= 0) {
		clearInterval(blink);
		led.unexport();
		return;
	} else {
		led.writeSync(isLedOn ? 0 : 1);
		isLedOn = !isLedOn;
	}
}, 150);
