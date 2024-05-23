let temp = 69;
const main = () => { 
	const thermostat = document.getElementById('thermostat');
	let tempEl = document.getElementById('tempEl');
	thermostat.addEventListener('mouseenter', () => {
		let interval = setInterval(()=>{
			temp += 1;
			tempEl.innerHTML = temp.toString();
			if (temp >= 72) { clearInterval(interval); }
		}, 160);
	});
	thermostat.addEventListener('mouseleave', () => {
		let interval = setInterval(()=>{
			temp -= 1;
			tempEl.innerHTML = temp.toString();
			if (temp <= 69) { clearInterval(interval); }
		}, 160);
	});
	
}

main();