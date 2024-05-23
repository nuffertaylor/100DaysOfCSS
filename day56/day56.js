const NUM_PETALS = 15;
const angle = 360 / NUM_PETALS;
const main = () => {
	const flower = document.getElementById("flower");
	for (let i = 0; i < NUM_PETALS; i++) {
		const petal = document.createElement("div");
		petal.classList.add("petal");
		petal.setAttribute("style", "transform: rotate(" + (i * angle).toString() + "deg)");
		flower.appendChild(petal);
	}
		const core = document.createElement("div");
	core.classList.add("core")
	flower.appendChild(core);
}

main();
