const NUM_LAYERS = 10;
const STARTING_X = 195;
const STARTING_Y = 195;
const RADIUS_STEP = 20;
const main = () => {
	const frame = document.getElementById("frame");
	let curRadius = 0;
	let angleStep = 40;
	for (let i = 1; i <= NUM_LAYERS; i++) {
		let curAngle = 0;
		curRadius += RADIUS_STEP;
		while (curAngle < 360) {
			//calc x
			const x = Math.floor((curRadius * Math.sin(curAngle)) + STARTING_X);
			//calc y
			const y = Math.floor((curRadius * Math.cos(curAngle)) + STARTING_Y);
			const circle = document.createElement("div");
			circle.classList.add("circle");
			circle.setAttribute("style", "top:" + x.toString() + "px; left:" + y.toString() + "px; animation-delay: " + (.25 * (i -1)).toString() + "s;");
			frame.appendChild(circle);
			curAngle += angleStep / i;
		}

	}
}

main();

