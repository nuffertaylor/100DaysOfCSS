let recording = false;
const toggleRecord = () => {
	const circletop = document.getElementById("circle-top");
	const pillInner = document.getElementById("pill-inner");
	recording = !recording;
	if (recording) {
		circletop.setAttribute("style", "border-color: red; animation: rotate 3s linear infinite;");
		pillInner.setAttribute("style", "background: red;")
	} else {
		circletop.setAttribute("style", "border-color: white;");
		pillInner.setAttribute("style", "background: #292929;")
	}
};
