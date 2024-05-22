let toggled = false;
const toggle = () => {
	const s1 = document.getElementById("s1");
	const s2 = document.getElementById("s2");
	toggled = !toggled;
	if (toggled) {
		s1.setAttribute("style", "transform: scale(6);");
		setTimeout(()=>{
			s2.setAttribute("style", "transform: scale(.7);");
		}, 1000);
	} else {
		s2.setAttribute("style", "");
		setTimeout(()=>{
			s1.setAttribute("style", "");
		}, 1000);
	}
};