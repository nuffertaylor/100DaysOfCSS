let curNum = 0;
let paused = true;
const main = () => {
	const counter = document.getElementById("counter");
	counter.innerHTML = curNum.toString().padStart(4, 0);
	
	const pausebtn = document.getElementById("pausebtn");
	const playbtn = document.getElementById("playbtn");
	
	pausebtn.style.display = "none";
	playbtn.style.display = "flex";
	
	pausebtn.addEventListener("click", () => {
		paused = true;
		pausebtn.style.display = "none";
		playbtn.style.display = "flex";
	});
	playbtn.addEventListener("click", () => {
		paused = false;
		playbtn.style.display = "none";
		pausebtn.style.display = "flex";
	});
	
	setInterval(()=>{
		if (!paused) {
			curNum += 1;
			counter.innerHTML = curNum.toString().padStart(4, 0);
		}
	}, 1000);
}

main();