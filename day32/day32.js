const main = () => {
	const counter = document.getElementById("counter");
	const minus = document.getElementById("m");
	const plus = document.getElementById("p");
	minus.addEventListener("click", () => {
		counter.innerHTML = (Number(counter.innerHTML) - 1).toString();
	});
	plus.addEventListener("click", () => {
		counter.innerHTML = (Number(counter.innerHTML) + 1).toString();
	});
};

main();