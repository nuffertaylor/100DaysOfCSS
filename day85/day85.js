const main = () => {
	const cr = document.getElementById("cr");
	for (let i = 0; i < 100; i++) {
		const c = document.createElement("div");
		c.classList.add("circle");
		c.classList.add("c" + i.toString());
		cr.appendChild(c);
	}
	for (let i = 100; i > 0; i--) {
		const c = document.createElement("div");
		c.classList.add("circle");
		c.classList.add("c" + i.toString());
		cr.appendChild(c);
	}
};

main();