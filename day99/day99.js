let isOn = false;

const main = () => {
	const buttonShifter = document.getElementById("button-shifter");
	const brightBg = document.getElementById("bright-bg");
	const expandingCircle = document.getElementById("expanding-circle");
	const lines = document.getElementById("lines");
	for (let i = 1; i < 21; i++) {
		const line = document.createElement('div');
		line.classList.add("line");
		line.classList.add("l" + i.toString());
		lines.appendChild(line);
	}
	buttonShifter.addEventListener("click", () => {
		buttonShifter.style.borderRadius = isOn ? '50%' : '0';
		buttonShifter.style.transform = isOn ? "" : "rotate(180deg)";
		
		brightBg.style.transform = isOn ? "" : "scale(1500%)";
		expandingCircle.style.transform = isOn ? "" : "scale(500%)";
		expandingCircle.style.opacity = isOn ? "1" : "0";
		lines.style.transform = isOn ? "" : "scale(200%)";
		lines.style.opacity = isOn ? "1" : "0";
		
		
		
		isOn = !isOn;
		
	});
};

main();