function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const popStars = (numStars) => {
	const sky = document.getElementById("sky");
	for (let i = 0; i < numStars; i++) {
		const star = document.createElement("div");
		star.classList.add("star");
		star.setAttribute('style', 'top:'+ getRandomInt(400).toString() + "px;left:" + getRandomInt(400).toString() + "px;animation: twinkle ease-in " + getRandomArbitrary(.5,5).toString() + "s infinite;");
		sky.appendChild(star);
	}
} 

popStars(400);
