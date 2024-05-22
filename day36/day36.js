const main = () => {
	const b = document.getElementById("b");
	const c = document.getElementById("c");
	const d = document.getElementById("d");
	const e = document.getElementById("e");
	const body = document.getElementById("body-content");
	const title = document.getElementById("title");
	b.classList.add("active");
	title.innerHTML = "Birb";
	const setActive = (a, d0, d1, d2) => {
		if (a.classList.contains("active")) { return; }
		body.style.marginTop = "24px";
		body.style.opacity = "0";
		setTimeout(() => {
			switch(a.id) {
			case "b":
				title.innerHTML = "Birb";
				break;
			case "c":
				title.innerHTML = "Corona";
				break;
			case "d":
				title.innerHTML = "Diamond";
				break;
			case "e":
				title.innerHTML = "Egg";
				break;
		}
			body.style.marginTop = "0";
		body.style.opacity = "1";
		}, 500)
		a.classList.add("active");
		d0.classList.remove("active");
		d1.classList.remove("active");
		d2.classList.remove("active");
	};
	b.addEventListener("click", () => setActive(b, c, d, e));
	c.addEventListener("click", () => setActive(c, b, d, e));
	d.addEventListener("click", () => setActive(d, c, b, e));
	e.addEventListener("click", () => setActive(e, c, d, b));
};

main();