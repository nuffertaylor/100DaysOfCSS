const NUMRODS = 10;
const NUMRINGS = 5;
const main = () => {
	const frame = document.getElementById("frame");
	const increment = 360 / NUMRODS;
	for (let i = 0; i < NUMRINGS; i++) {
		const ring = document.createElement("div");
		ring.classList.add("ring");
		ring.classList.add("ring-" + i.toString());
		for (let j = 0; j < NUMRODS; j++) {
			const rod = document.createElement("div");
			rod.classList.add("rod");
			rod.classList.add("rod-" + i.toString());
			rod.setAttribute("style", "transform: rotate(" + (increment * j).toString() + "deg); ");
			ring.appendChild(rod);
		}
		ring.setAttribute("style", "animation-delay: " + ((1.5 / NUMRINGS) * i).toString()  + "s;")
		frame.appendChild(ring);
	}
};

main();