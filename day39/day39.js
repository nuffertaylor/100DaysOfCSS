let menuOpen = false;
const toggle = () => {
	const topl = document.getElementById("topl");
	const bottoml = document.getElementById("bottoml");
	const menuItems = document.getElementById("menu-items");
	menuOpen = !menuOpen;
	if (menuOpen) {
		topl.setAttribute("style", "top: 0px; height: 3px; width: 300px; left: 50px;");
		bottoml.setAttribute("style", "top: 75px; height: 3px; width: 300px; left: 50px;");
		menuItems.setAttribute("style", "opacity: 1;")
	} else {
		topl.setAttribute("style", "");
		bottoml.setAttribute("style", "");
		menuItems.setAttribute("style", "")
	}
}