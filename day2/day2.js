let toggled = false;

const toggleMenu = () => {
	const b1 = document.getElementById("b1");
	const b2 = document.getElementById("b2");
	const b3 = document.getElementById("b3");
	
	if (!toggled) {
		b1.setAttribute("style", "animation: b1 1s forwards");
		b2.setAttribute("style", "animation: b2 1s forwards");
		b3.setAttribute("style", "animation: b3 1s forwards");
		setTimeout(()=>{
			b1.classList.add("b1-active");
			b2.classList.add("b-hide");
			b3.classList.add("b2-active");
			b1.setAttribute("style", "");
			b2.setAttribute("style", "");
			b3.setAttribute("style", "");
		}, 1000);
		toggled = true;
	}
	else {
				b1.setAttribute("style", "animation: b1-rev 1s forwards");
		b2.setAttribute("style", "animation: b2-rev 1s forwards");
		b3.setAttribute("style", "animation: b3-rev 1s forwards");
		setTimeout(()=>{
			b1.classList.remove("b1-active");
			b2.classList.remove("b-hide");
			b3.classList.remove("b2-active");
			b1.setAttribute("style", "");
			b2.setAttribute("style", "");
			b3.setAttribute("style", "");
		}, 1000);
		toggled = false;
	}
}