const popSquares = (numSquares, initialSize = 200, finalSize = 20, fromColor = "rgb(71, 71, 71)", toColor = "rgb(226, 226, 226)") => {
	const colors = interpolateColors(fromColor, toColor, numSquares);
  const frame = document.getElementById("frame");
	const stepSize = (initialSize - finalSize) / numSquares;
	for (let i = 0; i < numSquares; i++) {
		const square = document.createElement("div");
    square.classList.add("square");
		const nextSize = (initialSize - i * stepSize).toString() + 'px';
    square.setAttribute('style', 
												'width:' + nextSize + 
												'; height:' + nextSize + 
												'; border-color: ' + colors[i] +
											 '; animation: spin 2s ease-in-out ' + (i / 30).toString() + 's alternate infinite;'
											 );
		
    frame.appendChild(square);
	}
};

// from https://graphicdesign.stackexchange.com/questions/83866/generating-a-series-of-colors-between-two-colors
function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) { 
        factor = 0.5; 
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
};
function interpolateColors(color1, color2, steps) {
    var stepFactor = 1 / (steps - 1),
        interpolatedColorArray = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);

    for(var i = 0; i < steps; i++) {
				const resArr = interpolateColor(color1, color2, stepFactor * i);
        interpolatedColorArray.push('rgb(' + resArr[0].toString() + ', ' + resArr[1].toString() + ', ' + resArr[2].toString() + ')');
    }

    return interpolatedColorArray;
}


popSquares(20, 300, 10);

