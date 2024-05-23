let trackMouse = false;
let initPosX = 100;

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

const main = () => {
	const slider = document.getElementById("slider-grab");
	const initOffset = getOffset(slider);
	const offset = Math.floor(initOffset.left - initPosX);
	
	slider.addEventListener("mousedown", (e) => trackMouse = true);

	
	const frame = document.getElementById("frame");
	document.addEventListener("mouseup", (e) => trackMouse = false);
	frame.addEventListener("mousemove", (e) => {
		if (!trackMouse) { return; }
		console.log(e.clientX - offset);
		slider.style.left = Math.min(211, Math.max(e.clientX - offset, 11)).toString() + "px";
	})
}

main();