const NUM_CIRCLES = 50;
const main = () => {
	const frame = document.getElementById("frame");
	for(let i = 1; i <= NUM_CIRCLES; i++) {
		const circle = document.createElement("div");
circle.classList.add("circle");
circle.classList.add("c" + i.toString());
frame.appendChild(circle);
		
	}
};

main();