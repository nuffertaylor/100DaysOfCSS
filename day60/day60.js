const main = () => {
	const frame = document.getElementById("frame");
	const pane = document.getElementById("pane");
	frame.addEventListener("mousemove", (event) => {
		pane.style.height = event.layerY.toString() + "px";
	});

}

main();