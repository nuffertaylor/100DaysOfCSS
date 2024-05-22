const ACTIVE = ["20px", "95px", "170px"];
const COLOR = ["0", "-400px", "-800px"];

const main = () => {
	const colorRow = document.getElementById("color-row");
	const active = document.getElementById("active");
	for (let i = 0; i < 3; i++) {
		let option = document.getElementById("option" + i.toString());
		option.addEventListener("click", ()=> {
			active.setAttribute("style", "left: " + ACTIVE[i]);
			colorRow.setAttribute("style", "left: " + COLOR[i]);
		});
	}
}

main();