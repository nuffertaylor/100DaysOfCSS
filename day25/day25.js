const main = () => {
	const pin = document.getElementById("pin");
	const pinShadow = document.getElementById("pin-shadow");
	const card = document.getElementById("card");
	pin.addEventListener("click", ()=> {
		pin.setAttribute("style", "opacity: 0;");
		pinShadow.setAttribute("style", "opacity: 0;");
		setTimeout(() => {
			card.setAttribute("style", "opacity: 1; pointer-events: auto;");
		}, 300);
	});
	
	card.addEventListener("click", ()=> {
		card.setAttribute("style", "opacity: 0; pointer-events: none;");
		setTimeout(() => {
			pin.setAttribute("style", "opacity: 1;");
		pinShadow.setAttribute("style", "opacity: 1;");
		}, 300);
	});
};

main();