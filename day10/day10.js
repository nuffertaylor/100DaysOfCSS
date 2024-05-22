let time = document.getElementById("time");
let colon = true;
setInterval(()=>{
	if(colon)
		time.innerHTML = "10 09";
	else
		time.innerHTML = "10:09";
	colon = !colon;
}, 1000);