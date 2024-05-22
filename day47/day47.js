const popPixels = (numPixelsPerRow) => {
	const canvas = document.getElementById("canvas");
	for (let i = 0; i < numPixelsPerRow; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
	for (let j = 0; j < numPixelsPerRow; j++) {
		const pixel = document.createElement("div");
		pixel.classList.add("pixel");
		pixel.id = i.toString() + '-' + j.toString();
		pixel.onclick = () => {
			if (pixel.classList.contains("white")) {
				pixel.classList.remove("white");
			} else {
				pixel.classList.add("white");
			}
			pixel.classList.remove("black");
		}
		row.appendChild(pixel);
	}
		canvas.appendChild(row);
	}
}

popPixels(16);

const drawGhost = () => {
	document.getElementById("1-7").classList.add("white");
	document.getElementById("1-8").classList.add("white");
	document.getElementById("1-9").classList.add("white");
	document.getElementById("1-10").classList.add("white");
	document.getElementById("1-11").classList.add("white");
	document.getElementById("1-12").classList.add("white");
	document.getElementById("1-13").classList.add("white");
	document.getElementById("1-14").classList.add("white");
	
		document.getElementById("2-4").classList.add("white");
		document.getElementById("2-5").classList.add("white");
		document.getElementById("2-6").classList.add("white");
		document.getElementById("2-7").classList.add("white");
	document.getElementById("2-8").classList.add("white");
	document.getElementById("2-9").classList.add("white");
	document.getElementById("2-10").classList.add("white");
	document.getElementById("2-11").classList.add("white");
	document.getElementById("2-12").classList.add("white");
	document.getElementById("2-13").classList.add("white");
	
	document.getElementById("3-3").classList.add("white");
	document.getElementById("3-4").classList.add("white");
		document.getElementById("3-5").classList.add("white");
		document.getElementById("3-6").classList.add("white");
		document.getElementById("3-7").classList.add("white");
	document.getElementById("3-8").classList.add("white");
	document.getElementById("3-9").classList.add("white");
	document.getElementById("3-10").classList.add("white");
	document.getElementById("3-11").classList.add("white");
	document.getElementById("3-12").classList.add("white");
	
	document.getElementById("4-2").classList.add("white");
		document.getElementById("4-3").classList.add("white");
	document.getElementById("4-4").classList.add("white");
	document.getElementById("4-8").classList.add("white");
	document.getElementById("4-9").classList.add("white");
	document.getElementById("4-10").classList.add("white");
	document.getElementById("4-11").classList.add("white");
	document.getElementById("4-12").classList.add("white");
	document.getElementById("4-13").classList.add("white");
	
	document.getElementById("5-2").classList.add("white");
		document.getElementById("5-3").classList.add("white");
	document.getElementById("5-9").classList.add("white");
	document.getElementById("5-10").classList.add("white");
	document.getElementById("5-11").classList.add("white");
	document.getElementById("5-12").classList.add("white");
	document.getElementById("5-13").classList.add("white");
	document.getElementById("5-14").classList.add("white");
	
	document.getElementById("6-1").classList.add("white");
		document.getElementById("6-2").classList.add("white");
		document.getElementById("6-3").classList.add("white");
	document.getElementById("6-5").classList.add("black");
	document.getElementById("6-6").classList.add("black");
	document.getElementById("6-9").classList.add("white");
	document.getElementById("6-10").classList.add("white");
	document.getElementById("6-11").classList.add("white");
	document.getElementById("6-12").classList.add("white");
	
	document.getElementById("7-1").classList.add("white");
		document.getElementById("7-2").classList.add("white");
		document.getElementById("7-3").classList.add("white");
	document.getElementById("7-4").classList.add("white");
	document.getElementById("7-5").classList.add("black");
	document.getElementById("7-6").classList.add("black");
	document.getElementById("7-8").classList.add("white");
	document.getElementById("7-9").classList.add("white");
	document.getElementById("7-10").classList.add("white");
	document.getElementById("7-11").classList.add("white");
	document.getElementById("7-12").classList.add("white");
	
	document.getElementById("8-1").classList.add("white");
		document.getElementById("8-2").classList.add("white");
		document.getElementById("8-3").classList.add("white");
	document.getElementById("8-4").classList.add("white");
	document.getElementById("8-5").classList.add("white");
	document.getElementById("8-6").classList.add("white");
	document.getElementById("8-7").classList.add("white");
	document.getElementById("8-8").classList.add("white");
	document.getElementById("8-9").classList.add("white");
	document.getElementById("8-10").classList.add("white");
	document.getElementById("8-11").classList.add("white");
	document.getElementById("8-12").classList.add("white");
	document.getElementById("8-13").classList.add("white");
	document.getElementById("8-14").classList.add("white");
	
		document.getElementById("9-2").classList.add("white");
		document.getElementById("9-3").classList.add("white");
	document.getElementById("9-4").classList.add("white");
	document.getElementById("9-8").classList.add("white");
	document.getElementById("9-9").classList.add("white");
	document.getElementById("9-10").classList.add("white");
	document.getElementById("9-11").classList.add("white");
	document.getElementById("9-12").classList.add("white");
	document.getElementById("9-13").classList.add("white");
	document.getElementById("9-14").classList.add("white");
	
	document.getElementById("10-2").classList.add("white");
		document.getElementById("10-3").classList.add("white");
	document.getElementById("10-9").classList.add("white");
	document.getElementById("10-10").classList.add("white");
	document.getElementById("10-11").classList.add("white");
	document.getElementById("10-12").classList.add("white");
	document.getElementById("10-13").classList.add("white");
	
		document.getElementById("11-3").classList.add("white");
	document.getElementById("11-5").classList.add("black");
	document.getElementById("11-6").classList.add("black");
	document.getElementById("11-9").classList.add("white");
	document.getElementById("11-10").classList.add("white");
	document.getElementById("11-11").classList.add("white");
	document.getElementById("11-12").classList.add("white");
	
			document.getElementById("12-4").classList.add("white");
	document.getElementById("12-5").classList.add("black");
	document.getElementById("12-6").classList.add("black");
	document.getElementById("12-8").classList.add("white");
	document.getElementById("12-9").classList.add("white");
	document.getElementById("12-10").classList.add("white");
	document.getElementById("12-11").classList.add("white");
	document.getElementById("12-12").classList.add("white");
	document.getElementById("12-13").classList.add("white");
	
	document.getElementById("13-7").classList.add("white");
	document.getElementById("13-8").classList.add("white");
	document.getElementById("13-9").classList.add("white");
	document.getElementById("13-10").classList.add("white");
	document.getElementById("13-11").classList.add("white");
	document.getElementById("13-12").classList.add("white");
	document.getElementById("13-13").classList.add("white");
	document.getElementById("13-14").classList.add("white");
	
	document.getElementById("14-1").classList.add("white");
	document.getElementById("14-2").classList.add("white");
	document.getElementById("14-3").classList.add("white");
	document.getElementById("14-5").classList.add("white");
}

drawGhost();