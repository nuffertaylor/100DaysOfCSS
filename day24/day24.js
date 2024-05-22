const main = () => {
	const b = document.getElementById("b");
	const name = document.getElementById("name");
	const cp = document.getElementById("cp");
	const check = document.getElementById("check");
	b.addEventListener("click", () => {
		b.setAttribute("style", "width: 60px;")
		name.setAttribute("style", "opacity: 0");
		setTimeout(()=>{
			cp.setAttribute("style", "animation: progress-animation 3s linear 0s 1 forwards; opacity: 1;");
		}, 650);
		setTimeout(()=>{
			b.setAttribute("style", "width: 60px; background: white;")
			check.setAttribute("style", "opacity: 1;")
		}, 3850);
	});
};

main();