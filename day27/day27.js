const toggledArr = [false, false, false, false]

function toggle(num) {
	const toggled = toggledArr[num-1];
	toggledArr[num-1] = !toggled;
	const s = num.toString();
	const objective = document.getElementById("o" + s);
	const check = document.getElementById("c" + s);
	if(!toggled) {
	objective.setAttribute("style", "text-decoration: line-through;");
	check.setAttribute("style", "opacity: 1");
	}
	else {
		objective.setAttribute("style", "");
	check.setAttribute("style", "");
	}
}