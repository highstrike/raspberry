const { Gpio } = require('onoff');
const RT = new Gpio('23', 'out');
const RB = new Gpio('17', 'out');
const BT = new Gpio('22', 'out');
const BB = new Gpio('27', 'out');

const blink = (led) => {
	let times = 7;
	let on = true;

	led.writeSync(1);
	return new Promise(resolve => {
		let zz = setInterval(() => {
			if(times-- <= 0) {
				clearInterval(zz);
				return resolve();
			} else {
				on = !on;
				led.writeSync(on ? 1 : 0);
			}
		}, 45);
	});
};

const run = async (times) => {
	for(var i = 0; i < times; i++) {
		blink(RT);
		await blink(BT);

		blink(RB);
		await blink(BB);
	}

	RT.unexport();
	RB.unexport();
	BT.unexport();
	BB.unexport();
};

run(10);

