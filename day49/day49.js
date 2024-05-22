
const follow = (event) => {
	const pulse = document.getElementById("pulse-container");
	pulse.style.left = event.offsetX.toString() + "px";
	pulse.style.top = event.offsetY.toString() + "px";
	    
}